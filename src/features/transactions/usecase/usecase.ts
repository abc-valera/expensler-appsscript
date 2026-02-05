import type { URLFetchRequest } from '../../../shared/fetchutil'
import type { Transaction, TransactionsResponseProcessor } from '../model/model'
import { loadAccounts } from '../../accounts/storage'
import { BankProviderName } from '../../bank/model'
import { readBanks } from '../../bank/storage'
import { newMonobankRequest, processMonobankResponse } from '../providers/monobank'

export function getTransactions(fromDate: Date, toDate: Date): Transaction[] {
	const banksMap = readBanks()
	const accounts = loadAccounts()

	const requests: URLFetchRequest[] = []
	const responseProcessors: TransactionsResponseProcessor[] = []
	accounts.forEach((account) => {
		const bank = banksMap.get(account.provider.bankProvider)
		if (!bank) {
			Logger.log(`No bank found for provider ${account.provider.bankProvider}, skipping`)
			return
		}

		switch (account.provider.bankProvider) {
			case BankProviderName.Monobank:
				requests.push(newMonobankRequest(account, bank, fromDate, toDate))
				responseProcessors.push(processMonobankResponse)
				break
			case BankProviderName.Privatbank:
				throw new Error('Privatbank isnt supported yet')
			case BankProviderName.Raiffeisen:
				throw new Error('Raiffeisen isnt supported yet')
			default:
				throw new Error(`Unsupported bank provider: ${account.provider.bankProvider}`)
		}
	})

	const responses = UrlFetchApp.fetchAll(requests)
	const transactions: Transaction[] = []
	responses.forEach((response, index) => {
		const account = accounts[index]
		const bank = banksMap.get(account.provider.bankProvider)
		if (!bank) {
			Logger.log(`No bank found for provider ${account.provider.bankProvider}, skipping response processing`)
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
