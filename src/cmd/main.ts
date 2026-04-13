import { addAccount, deleteAccount, readAccountsArray } from '../features/accounts/data/property_storage'
import { syncTransactionsForLast30days } from '../features/accounts/usecase/sync_transactions'
import { AccountsSidebar } from '../features/accounts/view/sidebar_show'
import { createOrUpdateDashboardSheet } from '../features/dashboard/dashboard'
import { DebugHelloSidebar } from '../features/debug/hello_sidebar_show'
import { updateStatsSheet } from '../features/stats/data/sheet_update'
import { sheetNamePattern } from '../shared/dateutil'

export function onOpen() {
	createOrUpdateDashboardSheet()

	const ui = SpreadsheetApp.getUi()
	ui.createMenu('Expensler💸')
		.addItem('Sync Transactions', syncTransactionsForLast30days.name)
		.addItem('Accounts', AccountsSidebar.name)
		.addItem('Debug: Show Properties', debugShowProperties.name)
		.addItem('Debug: Show Dummy Sidebar', DebugHelloSidebar.name)
		.addToUi()
}

export function debugShowProperties() {
	const props = PropertiesService.getDocumentProperties().getProperties()
	Logger.log(JSON.stringify(props, null, 2))
}

export function onEdit(e: GoogleAppsScript.Events.SheetsOnEdit) {
	const editedSheet = e.range.getSheet()
	const sheetName = editedSheet.getName()

	if (!sheetNamePattern.test(sheetName)) {
		return
	}

	try {
		Logger.log(`Transactions sheet ${sheetName} was edited, updating stats...`)
		updateStatsSheet(sheetName)
		Logger.log(`Stats for sheet ${sheetName} updated successfully`)
	}
	catch (error) {
		Logger.log(`Error updating stats for sheet ${sheetName}: ${error}`)
	}
}

// Re-export functions needed by client-side code
export {
	addAccount,
	DebugHelloSidebar,
	deleteAccount,
	readAccountsArray,
}
