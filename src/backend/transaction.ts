import { mccMap } from './mcc_map_en.js'

export class Transaction {
	public readonly id: string
	public readonly amount: number
	public readonly time: string
	public readonly vendor: string
	public readonly category: string
	public readonly comment?: string
	public ref?: string

	constructor(input: {
		id: string
		amount: number
		time: number
		vendor: string
		comment?: string
		mccCode: number
	}) {
		if (!input.id) {
			throw new Error('Transaction ID is missing')
		}
		this.id = input.id
		if (!input.amount) {
			throw new Error('Transaction amount is missing')
		}

		this.amount = input.amount
		if (!input.time) {
			throw new Error('Transaction time is missing')
		}

		this.time = Utilities.formatDate(
			new Date(input.time),
			Session.getScriptTimeZone(),
			'yyyy-MM-dd HH:mm:ss',
		)

		if (!input.vendor) {
			throw new Error('Transaction vendor is missing')
		}
		this.vendor = input.vendor

		if (!input.mccCode) {
			throw new Error('Transaction MCC is missing')
		}
		this.category = mccMap[input.mccCode]?.shortDescription || 'Unknown'

		this.comment = input.comment
	}
}
