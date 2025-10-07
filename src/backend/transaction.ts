import { mccMap } from './mcc_map_en.js'

export class Transaction {
	public readonly id: string
	public readonly type: 'income' | 'expense' | 'blank'
	public readonly amount: number
	private readonly time: number
	public readonly formattedTime: string
	public readonly description?: string
	public readonly comment?: string
	public readonly mccCode: number
	public readonly mccShortDescription: string
	public ref?: string

	constructor(input: {
		id: string
		amount: number
		time: number
		description?: string
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
		this.time = input.time
		this.formattedTime = Utilities.formatDate(
			new Date(this.time),
			Session.getScriptTimeZone(),
			'yyyy-MM-dd HH:mm:ss',
		)
		if (!input.mccCode) {
			throw new Error('Transaction MCC is missing')
		}
		this.mccCode = input.mccCode
		this.description = input.description
		this.comment = input.comment

		// Set type to blank for MCC 4829 (Money transfer), otherwise use income/expense
		if (input.mccCode === 4829) {
			this.type = 'blank'
		}
		else {
			this.type = input.amount > 0 ? 'income' : 'expense'
		}

		this.mccShortDescription = mccMap[input.mccCode]?.shortDescription || 'Unknown'
	}
}
