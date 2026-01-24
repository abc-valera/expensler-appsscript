import { showHtmlDialog } from '../../../shared/message_dialog'
import { updateStatsSheet } from '../../stats/sheet/update'
import { getTransactions } from '../usecase/usecase'
import { createTransactionsSheet } from './create'
import { getTransactionsSheet } from './get'

export function updateWithNewTransactionsForCurrentAndPreviousMonth() {
	Logger.log('Updating transactions sheet with new transactions for the current and previous month')

	// TODO: update the sheet for current and previous month separately

	const currentMonth = new Date()
	const previousMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)

	const transactions = getTransactions(previousMonth, currentMonth)

	let sheet = getTransactionsSheet(currentMonth)
	if (!sheet) {
		Logger.log('No existing sheet found for current month, creating a new one')
		sheet = createTransactionsSheet(currentMonth)
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

		transactions.forEach((transaction) => {
			// Skip if already exists
			if (existingIds.has(transaction.id.toString())) {
				return
			}

			newRows.push([
				transaction.id,
				transaction.accountName,
				transaction.time,
				transaction.amount,
				transaction.vendor,
				transaction.category,
				transaction.comment,
				'', // Ref column - empty by default, to be filled manually
			])
		})

		// Batch append new rows (formatting is already applied to the entire columns)
		if (newRows.length > 0) {
			const startRow = lastRow + 1
			sheet.getRange(startRow, 1, newRows.length, newRows[0].length).setValues(newRows)
		}

		// Sort all transactions by Time column (column 3) in descending order (newest first)
		const dataLastRow = sheet.getLastRow()
		if (dataLastRow > 1) {
			const dataRange = sheet.getRange(2, 1, dataLastRow - 1, sheet.getLastColumn())
			dataRange.sort({ column: 3, ascending: false })
		}

		Logger.log(`Successfully synced ${newRows.length} new transactions`)
		showHtmlDialog({
			message: `Синхронізовано ${newRows.length} нових транзакцій`,
			type: 'info',
		})

		// Update stats sheet with new transaction data
		// TODO: maybe move this to another place
		updateStatsSheet(currentMonth)
	}
	catch (e) {
		Logger.log(`Error: ${e}`)
		showHtmlDialog({
			message: `Помилка: ${e}`,
			type: 'error',
		})
	}
}
