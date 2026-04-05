import { updateWithNewTransactions } from '../../transactions/data/sheet_update'
import { getTransactionsFromAllAccounts } from './get_transactions'

export function syncTransactionsForLast30days() {
	const now = new Date()
	const fromDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)

	const allTransactions = getTransactionsFromAllAccounts(fromDate, now)
	allTransactions.forEach((transactions, monthKey) => {
		updateWithNewTransactions(monthKey, transactions)
	})
}
