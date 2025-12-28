import { updateStatsSheet } from '../features/stats/sheet/update'
import { fetchMonobankTransactions } from '../features/transactions/providers/monobank'
import { updateWithNewTransactionsForCurrentMonth } from '../features/transactions/sheet/update_with_new_transactions'
import { MonthYear } from '../shared/month_year'

function addMonobankTransactions() {
	updateWithNewTransactionsForCurrentMonth(fetchMonobankTransactions)
}

export function onOpen(e: GoogleAppsScript.Events.SheetsOnOpen) {
	const ui = SpreadsheetApp.getUi()
	ui.createMenu('Expensler💸')
		.addItem('Add Monobank Transactions', addMonobankTransactions.name)
		.addToUi()
}

export function onEdit(e: GoogleAppsScript.Events.SheetsOnEdit) {
	const editedSheet = e.range.getSheet()
	const sheetName = editedSheet.getName()

	const transactionSheetPattern = /^\d{4}-\d{2}$/
	if (!transactionSheetPattern.test(sheetName)) {
		return
	}

	try {
		const monthYear = MonthYear.fromString(sheetName)
		Logger.log(`Transactions sheet ${sheetName} was edited, updating stats...`)
		updateStatsSheet(monthYear)
		Logger.log(`Stats for sheet ${sheetName} updated successfully`)
	}
	catch (error) {
		Logger.log(`Error updating stats for sheet ${sheetName}: ${error}`)
	}
}
