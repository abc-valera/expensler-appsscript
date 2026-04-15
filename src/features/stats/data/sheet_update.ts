import type { Transaction } from '../../transactions/model/model'
import type { CategoryAggregation } from '../model/category_aggregation'
import type { VendorAggregation } from '../model/vendor_aggregation'
import { sheetNamePattern, sheetNameToDate } from '../../../shared/dateutil'
import { getTransactionsForMonth } from '../../transactions/data/sheet_get'
import { addCategoryPieChart, addVendorPieChart, createStatsSheet } from './sheet_create'
import { categoryColumnsNumber, getCategoryColIndex, getTotalColIndex, getVendorColIndex, vendorColumnsNumber } from './sheet_dto'
import { getStatsSheet } from './sheet_get'

function getAllTransactions(): Map<string, Transaction> {
	const ss = SpreadsheetApp.getActiveSpreadsheet()
	const allTransactions = new Map<string, Transaction>()

	ss.getSheets().forEach((sheet) => {
		const name = sheet.getName()
		if (!sheetNamePattern.test(name)) {
			return
		}
		const transactions = getTransactionsForMonth(sheetNameToDate(name))
		transactions.forEach(t => allTransactions.set(t.id, t))
	})

	return allTransactions
}

export function updateStatsSheet(month: string) {
	let statsSheet = getStatsSheet(month)
	if (!statsSheet) {
		statsSheet = createStatsSheet(month)
	}

	// Clear existing data but keep headers
	{
		const lastRow = statsSheet.getLastRow()
		if (lastRow > 1) {
			statsSheet.deleteRows(2, lastRow - 1)
		}
	}

	const currentMonthTransactions = getTransactionsForMonth(sheetNameToDate(month))
	if (currentMonthTransactions.length === 0) {
		Logger.log(`No transactions found for month: ${month}`)
		return
	}
	const allTransactions = getAllTransactions()

	// Calculate the adjustedAmounts for reference transactions.
	//
	// If ref column isn't empty, the transaction references another transaction
	// - Positive amount: debt repayment received (someone was owing me money)
	// - Negative amount: payment of my debt (I was owing someone money)
	// The reference amount is added/subtracted to the original transaction's amount
	const adjustedAmounts = new Map<string, number>()

	allTransactions.forEach((transaction) => {
		if (transaction.ref && transaction.ref.trim() !== '') {
			const originalTransaction = allTransactions.get(transaction.ref)
			if (originalTransaction) {
				const currentAdjustment = adjustedAmounts.get(originalTransaction.id) ?? originalTransaction.amount
				adjustedAmounts.set(originalTransaction.id, currentAdjustment + transaction.amount)
			}
		}
		else {
			if (!adjustedAmounts.has(transaction.id)) {
				adjustedAmounts.set(transaction.id, transaction.amount)
			}
		}
	})

	const categoryMap = new Map<string, CategoryAggregation>()
	const vendorMap = new Map<string, VendorAggregation>()

	currentMonthTransactions.forEach((transaction) => {
		if (transaction.ref && transaction.ref.trim() !== '') {
			return
		}

		if (transaction.category === 'Ignore') {
			return
		}

		const category = transaction.category
		const vendor = transaction.vendor
		const adjustedAmount = adjustedAmounts.get(transaction.id) ?? transaction.amount

		let categoryStats = categoryMap.get(category)
		if (!categoryStats) {
			categoryStats = { category, totalAmount: 0, transactionCount: 0 }
			categoryMap.set(category, categoryStats)
		}
		categoryStats.totalAmount += adjustedAmount
		categoryStats.transactionCount += 1

		let vendorStats = vendorMap.get(vendor)
		if (!vendorStats) {
			vendorStats = { vendor, totalAmount: 0, transactionCount: 0 }
			vendorMap.set(vendor, vendorStats)
		}
		vendorStats.totalAmount += adjustedAmount
		vendorStats.transactionCount += 1
	})

	const categoryAggregations = Array.from(categoryMap.values()).sort(
		(a, b) => Math.abs(b.totalAmount) - Math.abs(a.totalAmount),
	)
	const vendorAggregations = Array.from(vendorMap.values()).sort(
		(a, b) => Math.abs(b.totalAmount) - Math.abs(a.totalAmount),
	)

	const categoryRows = categoryAggregations.map(stat => [stat.category, Math.abs(stat.totalAmount), stat.transactionCount])
	const vendorRows = vendorAggregations.map(stat => [stat.vendor, Math.abs(stat.totalAmount), stat.transactionCount])

	if (categoryRows.length > 0) {
		statsSheet.getRange(2, getCategoryColIndex('category'), categoryRows.length, categoryColumnsNumber).setValues(categoryRows)
	}

	if (vendorRows.length > 0) {
		statsSheet.getRange(2, getVendorColIndex('vendor'), vendorRows.length, vendorColumnsNumber).setValues(vendorRows)
	}

	try {
		addCategoryPieChart(statsSheet, categoryRows.length)
		addVendorPieChart(statsSheet, vendorRows.length)
	}
	catch (e) {
		Logger.log(`Error updating charts for sheet ${month}-stats: ${e}`)
	}

	const totalSpent = Array.from(categoryMap.values()).reduce((sum, c) => sum + c.totalAmount, 0)
	statsSheet.getRange(2, getTotalColIndex('totalSpent')).setValue(totalSpent)

	Logger.log(`Stats sheet updated: ${month}-stats`)
}
