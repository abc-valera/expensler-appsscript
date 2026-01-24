import type { HTTPResponse, URLFetchRequest } from '../../../shared/fetchutil'
import type { Account, MonobankAccountDetails } from '../../accounts/model'
import type { Bank, MonobankBankDetails } from '../../bank/bank'
import { mccMap } from '../model/mcc_map_en'
import { Transaction } from '../model/model'

export function newMonobankRequest(account: Account, bank: Bank, fromMonth: Date, toMonth: Date): URLFetchRequest {
	if (bank.details.provider !== 'monobank') {
		throw new Error('Invalid bank details for Monobank')
	}
	const bankDetails = bank.details as MonobankBankDetails

	if (account.details.provider !== 'monobank') {
		throw new Error('Invalid account details for Monobank')
	}
	const accountDetails = account.details as MonobankAccountDetails

	const from = Math.floor(new Date(fromMonth.getFullYear(), fromMonth.getMonth(), 1).getTime() / 1000)
	const to = Math.floor(new Date(toMonth.getFullYear(), toMonth.getMonth() + 1, 0, 23, 59, 59).getTime() / 1000)
	const url = `https://api.monobank.ua/personal/statement/${accountDetails.accountId}/${from}/${to}`

	return {
		url,
		method: 'get',
		headers: {
			'X-Token': bankDetails.apiKey,
		},
	}
}

interface MonobankStatement {
	id: string
	time: number
	description: string
	mcc: number
	originalMcc: number
	hold: boolean
	amount: number
	operationAmount: number
	currencyCode: number
	commissionRate: number
	cashbackAmount: number
	balance: number
	comment: string
	receiptId: string
	invoiceId: string
	counterEdrpou: string
	counterIban: string
	counterName: string
}

export function processMonobankResponse(account: Account, bank: Bank, response: HTTPResponse): Transaction[] {
	const responseCode = response.getResponseCode()
	if (responseCode !== 200) {
		throw new Error(
			`Request error: ${responseCode} - ${response.getContentText()}`,
		)
	}

	const dtoStatements: MonobankStatement[] = JSON.parse(response.getContentText())

	const transactions: Transaction[] = dtoStatements.map(dto => new Transaction({
		id: dto.id,
		accountName: account.uniqueName,
		time: new Date(dto.time * 1000),
		amount: dto.amount / 100,
		vendor: dto.description,
		category: mccMap[dto.mcc]?.shortDescription || 'Unknown',
		comment: dto.comment,
	}))

	return transactions
}
