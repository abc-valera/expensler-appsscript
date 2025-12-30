import type { TransactionsFetcher } from '../model/model'
import { showHtmlDialog } from '../../../shared/message_dialog'
import { newCurrentMonthYear } from '../../../shared/month_year'
import { updateStatsSheet } from '../../stats/sheet/update'
import { createTransactionsSheet } from './create'
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

		// Batch append new rows (formatting is already applied to the entire columns)
		if (newRows.length > 0) {
			const startRow = lastRow + 1
			sheet.getRange(startRow, 1, newRows.length, newRows[0].length).setValues(newRows)
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
