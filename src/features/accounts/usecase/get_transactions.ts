import type { Transaction } from '../../transactions/model/model'
import { loadAccounts } from '../data/property_storage'

export function getTransactionsFromAllAccounts(from: Date, to: Date): Map<string, Transaction[]> {
	const accounts = loadAccounts()

	const requests = accounts.map(account => account.newGetTransactionsRequest(from, to))

	const responses = UrlFetchApp.fetchAll(requests)

	const allTransactions = new Map<string, Transaction[]>()

	responses.forEach((response, index) => {
		const accountTransactions = accounts[index].processGetTransactionsResponse(response)

		accountTransactions.forEach((transactions, key) => {
			if (!allTransactions.has(key)) {
				allTransactions.set(key, [])
			}

			allTransactions.set(key, allTransactions.get(key)!.concat(transactions))
		})
	})

	// Sort transactions by time for each month (newest first)
	allTransactions.forEach((transactions) => {
		transactions.sort((a, b) => b.time.getTime() - a.time.getTime())
	})

	return allTransactions
}
