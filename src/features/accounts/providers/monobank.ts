import type { HTTPResponse, URLFetchRequest } from '../../../shared/fetchutil'
import type { Account } from '../interface/account'
import { dateToSheetName } from '../../../shared/dateutil'
import { mccMap } from '../../transactions/model/mcc_map_en'
import { Transaction } from '../../transactions/model/model'

export const monobankName = 'Monobank'

export class MonobankAccount implements Account {
	public readonly name: string
	public readonly bankName: string = monobankName
	public readonly addedAt: Date = new Date()

	public readonly accountId: string
	public readonly apiKey: string

	constructor(input: { name: string, accountId: string, apiKey: string }) {
		if (!input.name) {
			throw new Error('Monobank account name is missing')
		}
		this.name = input.name

		if (!input.apiKey) {
			throw new Error('Monobank API key is missing')
		}
		this.apiKey = input.apiKey

		if (!input.accountId) {
			throw new Error('Monobank account ID is missing')
		}
		this.accountId = input.accountId
	}

	public newGetTransactionsRequest(from: Date, to: Date): URLFetchRequest {
		const fromTs = Math.floor(from.getTime() / 1000)
		const toTs = Math.floor(to.getTime() / 1000)
		const url = `https://api.monobank.ua/personal/statement/${this.accountId}/${fromTs}/${toTs}`

		return {
			url,
			method: 'get',
			headers: {
				'X-Token': this.apiKey,
			},
			muteHttpExceptions: true,
		}
	}

	public processGetTransactionsResponse(response: HTTPResponse): Map<string, Transaction[]> {
		const responseCode = response.getResponseCode()
		if (responseCode !== 200) {
			throw new Error(
				`Request error: ${responseCode} - ${response.getContentText()}`,
			)
		}

		const monobankStatements: MonobankStatement[] = JSON.parse(response.getContentText())

		const transactions = new Map<string, Transaction[]>()

		for (const monobankStatement of monobankStatements) {
			const transactionTime = new Date(monobankStatement.time * 1000)
			const key = dateToSheetName(transactionTime)

			if (!transactions.has(key)) {
				transactions.set(key, [])
			}

			transactions.get(key)!.push(new Transaction({
				id: monobankStatement.id,
				accountName: this.name,
				time: transactionTime,
				amount: monobankStatement.amount / 100,
				vendor: monobankStatement.description,
				category: mccMap[monobankStatement.mcc]?.shortDescription || 'Unknown',
				comment: monobankStatement.comment,
			}))
		}

		return transactions
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
