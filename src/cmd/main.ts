import { showAccounts } from '../features/accounts/ui_sidebar'
import { showBankIntegrations } from '../features/bank/ui_sidebar'
import { updateStatsSheet } from '../features/stats/sheet/update'
import { updateWithNewTransactionsForCurrentAndPreviousMonth } from '../features/transactions/sheet/update'
import { parseMonthYearString, TransactionSheetNamePattern } from '../shared/dateutil'

export function onOpen() {
	const ui = SpreadsheetApp.getUi()
	ui.createMenu('Expensler💸')
		.addItem('Sync Transactions', updateWithNewTransactionsForCurrentAndPreviousMonth.name)
		.addItem('Accounts', showAccounts.name)
		.addItem('Bank Integrations', showBankIntegrations.name)
		.addToUi()
}

export function onEdit(e: GoogleAppsScript.Events.SheetsOnEdit) {
	const editedSheet = e.range.getSheet()
	const sheetName = editedSheet.getName()

	if (!TransactionSheetNamePattern.test(sheetName)) {
		return
	}

	try {
		const monthDate = parseMonthYearString(sheetName)
		Logger.log(`Transactions sheet ${sheetName} was edited, updating stats...`)
		updateStatsSheet(monthDate)
		Logger.log(`Stats for sheet ${sheetName} updated successfully`)
	}
	catch (error) {
		Logger.log(`Error updating stats for sheet ${sheetName}: ${error}`)
	}
}
