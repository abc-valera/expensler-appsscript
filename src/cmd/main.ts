import { getTransactionsFromMonobank } from '../backend/monobank.js'
import { showHtmlDialog } from '../frontend/expensler_html_dialog.js'
import { formatColumns } from '../frontend/format_columns.js'
import { getTargetSheet } from '../frontend/sheet_constructor.js'

export function onOpen() {
	const ui = SpreadsheetApp.getUi()
	ui.createMenu('Expensler💸')
		.addItem('Sync Monobank', syncMonobankTransactions.name)
		.addToUi()
}

function syncMonobankTransactions() {
	const sheet = getTargetSheet()

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
		const newRows: any[][] = []
		const transactions = getTransactionsFromMonobank()
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

			// Apply formatting to new rows
			formatColumns(sheet, startRow, newRows.length)
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
	}
	catch (e: any) {
		Logger.log(`Error: ${e.message}`)
		showHtmlDialog({
			message: `Помилка: ${e.message}`,
			type: 'error',
		})
	}
}
