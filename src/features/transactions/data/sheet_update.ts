import type { Transaction } from '../model/model'
import { showHtmlDialog } from '../../../shared/message_dialog'
import { createTransactionsSheet } from './sheet_create'
import { colNames } from './sheet_dto'
import { getTransactionsSheet } from './sheet_get'

export function updateWithNewTransactions(monthYear: string, transactions: Transaction[]): void {
	Logger.log('Updating transactions sheet with new transactions')

	let sheet = getTransactionsSheet(monthYear)
	if (!sheet) {
		Logger.log(`No existing sheet found for ${monthYear}, creating a new one`)
		sheet = createTransactionsSheet(monthYear)
	}

	try {
		// Get existing IDs to avoid duplicates
		const lastRow = sheet.getLastRow()
		const existingIds = new Set<string>()

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

			const row = (Object.keys(colNames) as (keyof typeof colNames)[]).map(
				field => transaction[field] ?? '',
			)

			newRows.push(row)
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
	}
	catch (e) {
		Logger.log(`Error: ${e}`)
		showHtmlDialog({
			message: `Помилка: ${e}`,
			type: 'error',
		})
	}
}
