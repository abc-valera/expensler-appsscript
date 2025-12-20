import { fetchMonobankTransactions } from '../features/transactions/providers/monobank'
import { updateWithNewTransactionsForCurrentMonth } from '../features/transactions/sheet/update_with_new_transactions'

function addMonobankTransactions() {
	updateWithNewTransactionsForCurrentMonth(fetchMonobankTransactions)
}

export function onOpen() {
	const ui = SpreadsheetApp.getUi()
	ui.createMenu('Expensler💸')
		.addItem('Add Monobank Transactions', addMonobankTransactions.name)
		.addToUi()
}
