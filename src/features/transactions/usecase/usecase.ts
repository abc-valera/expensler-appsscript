import type { URLFetchRequest } from '../../../shared/fetchutil'
import type { Transaction, TransactionsResponseProcessor } from '../model/model'
import { loadAccounts } from '../../accounts/storage'
import { BankProvider } from '../../bank/bank'
import { loadBanks } from '../../bank/storage'
import { newMonobankRequest, processMonobankResponse } from '../providers/monobank'

export function getTransactions(fromDate: Date, toDate: Date): Transaction[] {
	const banks = loadBanks()
	const accounts = loadAccounts()

	const requests: URLFetchRequest[] = []
	const responseProcessors: TransactionsResponseProcessor[] = []
	accounts.forEach((account) => {
		const bank = banks.find(b => b.details.provider === account.details.provider)
		if (!bank) {
			Logger.log(`No bank found for provider ${account.details.provider}, skipping`)
			return
		}

		switch (account.details.provider) {
			case BankProvider.Monobank:
				requests.push(newMonobankRequest(account, bank, fromDate, toDate))
				responseProcessors.push(processMonobankResponse)
				break
			case BankProvider.Privatbank:
				throw new Error('Privatbank isnt supported yet')
			case BankProvider.Raiffaisen:
				throw new Error('Raiffaisen isnt supported yet')
			default:
				throw new Error(`Unsupported bank provider: ${account.details.provider}`)
		}
	})

	const responses = UrlFetchApp.fetchAll(requests)
	const transactions: Transaction[] = []
	responses.forEach((response, index) => {
		const account = accounts[index]
		const bank = banks.find(b => b.details.provider === account.details.provider)
		if (!bank) {
			Logger.log(`No bank found for provider ${account.details.provider}, skipping response processing`)
			return
		}

		const processor = responseProcessors[index]
		const newTransactions = processor(account, bank, response)
		transactions.push(...newTransactions)
	})

	// Sort transactions by time (newest first)
	transactions.sort((a, b) => b.time.getTime() - a.time.getTime())

	return transactions
}
