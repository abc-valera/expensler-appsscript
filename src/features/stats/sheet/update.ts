import type { MonthYear } from '../../../shared/month_year'
import type { CategoryAggregation } from '../model/category_aggregation'
import type { VendorAggregation } from '../model/vendor_aggregation'
import { getTransactions } from '../../transactions/sheet/get_transactions'
import { createStatsSheet } from './create'
import { getStatsSheet } from './get'

function aggregateByCategory(monthYear: MonthYear): CategoryAggregation[] {
	const transactions = getTransactions(monthYear)

	// Reference transactions: if ref column isn't empty, the transaction references another transaction
	// - Positive amount: debt repayment received (someone was owing me money)
	// - Negative amount: payment of my debt (I was owing someone money)
	// The reference amount is added/subtracted to the original transaction's amount
	const adjustedAmounts = new Map<string, number>()

	transactions.forEach((transaction) => {
		if (transaction.ref && transaction.ref.trim() !== '') {
			const originalTransaction = transactions.get(transaction.ref)
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

	transactions.forEach((transaction) => {
		if (transaction.ref && transaction.ref.trim() !== '') {
			return
		}

		if (transaction.category === 'Ignore') {
			return
		}

		const key = transaction.category
		const adjustedAmount = adjustedAmounts.get(transaction.id) ?? transaction.amount

		if (!categoryMap.has(key)) {
			categoryMap.set(key, {
				category: key,
				totalAmount: 0,
				transactionCount: 0,
			})
		}

		const stats = categoryMap.get(key)!
		stats.totalAmount += adjustedAmount
		stats.transactionCount += 1
	})

	return Array.from(categoryMap.values()).sort(
		(a, b) => Math.abs(b.totalAmount) - Math.abs(a.totalAmount),
	)
}

function aggregateByVendor(monthYear: MonthYear): VendorAggregation[] {
	const transactionMap = getTransactions(monthYear)

	// Same reference transaction logic as aggregateByCategory
	const adjustedAmounts = new Map<string, number>()

	transactionMap.forEach((transaction) => {
		if (transaction.ref && transaction.ref.trim() !== '') {
			const originalTransaction = transactionMap.get(transaction.ref)
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

	const vendorMap = new Map<string, VendorAggregation>()

	transactionMap.forEach((transaction) => {
		if (transaction.ref && transaction.ref.trim() !== '') {
			return
		}

		if (transaction.category === 'Ignore') {
			return
		}

		const key = transaction.vendor
		const adjustedAmount = adjustedAmounts.get(transaction.id) ?? transaction.amount

		if (!vendorMap.has(key)) {
			vendorMap.set(key, {
				vendor: key,
				totalAmount: 0,
				transactionCount: 0,
			})
		}

		const stats = vendorMap.get(key)!
		stats.totalAmount += adjustedAmount
		stats.transactionCount += 1
	})

	return Array.from(vendorMap.values()).sort(
		(a, b) => Math.abs(b.totalAmount) - Math.abs(a.totalAmount),
	)
}

export function updateStatsSheet(monthYear: MonthYear): void {
	const ss = SpreadsheetApp.getActiveSpreadsheet()
	const transactionsSheetName = monthYear.format()

	const transactionsSheet = ss.getSheetByName(transactionsSheetName)
	if (!transactionsSheet) {
		Logger.log(`Transactions sheet ${transactionsSheetName} not found`)
		return
	}

	// Get or create stats sheet
	let statsSheet = getStatsSheet(monthYear)
	if (!statsSheet) {
		statsSheet = createStatsSheet(monthYear)
	}

	// Clear existing data but keep headers
	const lastRow = statsSheet.getLastRow()
	if (lastRow > 1) {
		statsSheet.deleteRows(2, lastRow - 1)
	}

	const categoryStats = aggregateByCategory(monthYear)
	const vendorStats = aggregateByVendor(monthYear)

	if (categoryStats.length === 0 && vendorStats.length === 0) {
		Logger.log('No transactions to analyze')
		return
	}

	// Prepare rows for category stats
	const categoryRows = categoryStats.map(stat => [stat.category, stat.totalAmount, stat.transactionCount])
	// Prepare rows for vendor stats
	const vendorRows = vendorStats.map(stat => [stat.vendor, stat.totalAmount, stat.transactionCount])
	// Get the maximum number of rows needed
	const maxRows = Math.max(categoryRows.length, vendorRows.length)

	// Write category data to columns A-C
	if (categoryRows.length > 0) {
		statsSheet
			.getRange(2, 1, categoryRows.length, 3)
			.setValues(categoryRows)
			.setFontFamily('IBM Plex Mono')
			.setFontSize(12)

		// Format Amount column (B) as currency
		statsSheet
			.getRange(2, 2, categoryRows.length, 1)
			.setNumberFormat('#,##0.00 ₴')
			.setHorizontalAlignment('right')

		// Format Category and Count columns
		statsSheet.getRange(2, 1, categoryRows.length, 1).setHorizontalAlignment('left') // Category
		statsSheet.getRange(2, 3, categoryRows.length, 1).setHorizontalAlignment('center') // Count
	}

	// Write vendor data to columns E-G
	if (vendorRows.length > 0) {
		statsSheet
			.getRange(2, 5, vendorRows.length, 3)
			.setValues(vendorRows)
			.setFontFamily('IBM Plex Mono')
			.setFontSize(12)

		// Format Amount column (F) as currency
		statsSheet
			.getRange(2, 6, vendorRows.length, 1)
			.setNumberFormat('#,##0.00 ₴')
			.setHorizontalAlignment('right')

		// Format Vendor and Count columns
		statsSheet.getRange(2, 5, vendorRows.length, 1).setHorizontalAlignment('left') // Vendor
		statsSheet.getRange(2, 7, vendorRows.length, 1).setHorizontalAlignment('center') // Count
	}

	Logger.log(`Stats sheet updated: ${monthYear.format()}-stats`)
}
