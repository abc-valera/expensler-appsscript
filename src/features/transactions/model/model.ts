export type TransactionsFetcher = () => Transaction[]

export class Transaction {
	public readonly id: string
	public readonly time: Date
	public readonly amount: number
	public readonly vendor: string
	public readonly category: string
	public readonly comment?: string
	public ref?: string

	constructor(input: {
		id: string
		time: Date
		amount: number
		vendor: string
		category: string
		comment?: string
		ref?: string
	}) {
		if (!input.id) {
			throw new Error('Transaction ID is missing')
		}
		this.id = input.id

		if (!input.time || Number.isNaN(input.time.getTime())) {
			throw new Error('Transaction time is missing')
		}
		this.time = input.time

		if (!input.amount) {
			throw new Error('Transaction amount is missing')
		}
		this.amount = input.amount

		if (!input.vendor) {
			throw new Error('Transaction vendor is missing')
		}
		this.vendor = input.vendor

		if (!input.category) {
			throw new Error('Transaction category is missing')
		}
		this.category = input.category

		this.comment = input.comment

		this.ref = input.ref
	}
}
