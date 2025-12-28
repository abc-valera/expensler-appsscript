import type { TransactionsFetcher } from '../model/model'
import { showHtmlDialog } from '../../../shared/message_dialog'
import { newCurrentMonthYear } from '../../../shared/month_year'
import { updateStatsSheet } from '../../stats/sheet/update'
import { columnsNumber, createTransactionsSheet } from './create'
import { getTransactionsSheet } from './get'

export function updateWithNewTransactionsForCurrentMonth(fetchTransactions: TransactionsFetcher) {
	Logger.log('Updating transactions sheet with new transactions for the current month using', fetchTransactions.name)

	const currentMonthYear = newCurrentMonthYear()
	let sheet = getTransactionsSheet(currentMonthYear)
	if (!sheet) {
		Logger.log('No existing sheet found for current month, creating a new one')
		sheet = createTransactionsSheet(currentMonthYear)
	}

	try {
		// Get existing IDs to avoid duplicates (ID is now in column 1)
		const lastRow = sheet.getLastRow()
		const existingIds = new Set()

		if (lastRow > 1) {
			const existingData = sheet.getRange(2, 1, lastRow - 1, 1).getValues()
			existingData.forEach((row) => {
				if (row[0]) {
					existingIds.add(row[0].toString())
				}
			})
		}

		// Process and collect new transactions
		const newRows: unknown[][] = []
		const transactions = fetchTransactions()
		transactions.forEach((transaction) => {
			// Skip if already exists
			if (existingIds.has(transaction.id.toString())) {
				return
			}

			newRows.push([
				transaction.id,
				transaction.time,
				transaction.amount,
				transaction.vendor,
				transaction.category,
				transaction.comment,
				'', // Ref column - empty by default, to be filled manually
			])
		})

		// Batch append new rows
		if (newRows.length > 0) {
			const startRow = lastRow + 1
			sheet.getRange(startRow, 1, newRows.length, newRows[0].length).setValues(newRows)

			const numRows = newRows.length

			// Apply font to all new rows
			const allColumnsRange = sheet.getRange(startRow, 1, numRows, columnsNumber)
			allColumnsRange.setFontFamily('IBM Plex Mono')
			allColumnsRange.setFontSize(12)

			// ID column (A) - centered
			sheet.getRange(startRow, 1, numRows, 1).setHorizontalAlignment('center')

			// Time column (B) - datetime format
			sheet.getRange(startRow, 2, numRows, 1).setNumberFormat('dd.mm.yyyy hh:mm')

			// Amount column (C) - currency format, right-aligned
			const amountRange = sheet.getRange(startRow, 3, numRows, 1)
			amountRange.setNumberFormat('#,##0.00 ₴')
			amountRange.setHorizontalAlignment('right')

			// Vendor column (D) - left-aligned, wrap text
			sheet.getRange(startRow, 4, numRows, 1)
				.setWrap(true)
				.setVerticalAlignment('middle')

			// Category column (E) - centered
			sheet.getRange(startRow, 5, numRows, 1).setHorizontalAlignment('center')

			// Comment column (F) - left-aligned, wrap text
			sheet.getRange(startRow, 6, numRows, 1)
				.setWrap(true)
				.setVerticalAlignment('middle')

			// Ref column (G) - centered
			sheet.getRange(startRow, 7, numRows, 1).setHorizontalAlignment('center')
		}

		// Sort all transactions by Time column (column 2) in descending order (newest first)
		const dataLastRow = sheet.getLastRow()
		if (dataLastRow > 1) {
			const dataRange = sheet.getRange(2, 1, dataLastRow - 1, sheet.getLastColumn())
			dataRange.sort({ column: 2, ascending: false })
		}

		Logger.log(`Successfully synced ${newRows.length} new transactions`)
		showHtmlDialog({
			message: `Синхронізовано ${newRows.length} нових транзакцій`,
			type: 'info',
		})

		// Update stats sheet with new transaction data
		// TODO: maybe move this to another place
		updateStatsSheet(currentMonthYear)
	}
	catch (e) {
		Logger.log(`Error: ${e}`)
		showHtmlDialog({
			message: `Помилка: ${e}`,
			type: 'error',
		})
	}
}
