import type { CategoryAggregation } from '../model/category_aggregation'
import type { VendorAggregation } from '../model/vendor_aggregation'
import { formatDateToMonthYear } from '../../../shared/dateutil'
import { getAllTransactions, getTransactionsForMonth } from '../../transactions/sheet/get'
import { createStatsSheet } from './create'
import { getStatsSheet } from './get'

export function updateStatsSheet(month: Date) {
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

	const currentMonthTransactions = getTransactionsForMonth(month)
	if (currentMonthTransactions.size === 0) {
		Logger.log(`No transactions found for month: ${formatDateToMonthYear(month)}`)
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
			categoryStats = {
				category,
				totalAmount: 0,
				transactionCount: 0,
			}
			categoryMap.set(category, categoryStats)
		}
		categoryStats.totalAmount += adjustedAmount
		categoryStats.transactionCount += 1

		let vendorStats = vendorMap.get(vendor)
		if (!vendorStats) {
			vendorStats = {
				vendor,
				totalAmount: 0,
				transactionCount: 0,
			}
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

	const categoryRows = categoryAggregations.map(stat => [stat.category, stat.totalAmount, stat.transactionCount])
	const vendorRows = vendorAggregations.map(stat => [stat.vendor, stat.totalAmount, stat.transactionCount])

	if (categoryRows.length > 0) {
		statsSheet.getRange(2, 1, categoryRows.length, 3).setValues(categoryRows)
	}
	if (vendorRows.length > 0) {
		statsSheet.getRange(2, 5, vendorRows.length, 3).setValues(vendorRows)
	}

	Logger.log(`Stats sheet updated: ${formatDateToMonthYear(month)}-stats`)
}
