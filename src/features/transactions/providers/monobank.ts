import { mccMap } from '../model/mcc_map_en'
import { Transaction } from '../model/model'

/**
 * Fetches statements from Monobank API
 * https://api.monobank.ua/docs/index.html#tag/Kliyentski-personalni-dani
 */

const MONOBANK_TOKEN = 'MONOBANK_TOKEN_PLACEHOLDER'
const MONOBANK_ACCOUNT = 'MONOBANK_ACCOUNT_PLACEHOLDER'

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

export function fetchMonobankTransactions(): Transaction[] {
	const now = new Date()
	const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
	const from = Math.floor(startOfMonth.getTime() / 1000)
	const to = Math.floor(Date.now() / 1000)
	const url = `https://api.monobank.ua/personal/statement/${MONOBANK_ACCOUNT}/${from}/${to}`

	try {
		const response = UrlFetchApp.fetch(url, {
			method: 'get',
			headers: {
				'X-Token': MONOBANK_TOKEN,
			},
		})

		const responseCode = response.getResponseCode()
		if (responseCode !== 200) {
			throw new Error(
				`Request error: ${responseCode} - ${response.getContentText()}`,
			)
		}

		const dtoStatements: MonobankStatement[] = JSON.parse(response.getContentText())

		// Convert DTOs to Transaction models
		const transactions: Transaction[] = dtoStatements.map(dto => new Transaction({
			id: dto.id,
			time: new Date(dto.time * 1000),
			amount: dto.amount / 100,
			vendor: dto.description,
			category: mccMap[dto.mcc]?.shortDescription || 'Unknown',
			comment: dto.comment,
		}))

		return transactions
	}
	catch (e: unknown) {
		Logger.log(`Error details: ${e}`)
		throw e
	}
}
