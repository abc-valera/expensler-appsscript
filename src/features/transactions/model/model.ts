export class Transaction {
	public readonly id: string
	public readonly accountName: string
	public readonly time: Date
	public readonly amount: number
	public readonly category: string
	public readonly vendor: string
	public readonly comment?: string
	public ref?: string

	constructor(input: {
		id: string
		accountName: string
		time: Date
		amount: number
		category: string
		vendor: string
		comment?: string
		ref?: string
	}) {
		if (!input.id) {
			throw new Error('Transaction ID is missing')
		}
		this.id = input.id

		if (!input.accountName) {
			throw new Error('Transaction account ID is missing')
		}
		this.accountName = input.accountName

		if (!input.time || Number.isNaN(input.time.getTime())) {
			throw new Error('Transaction time is missing')
		}
		this.time = input.time

		if (input.amount === undefined || input.amount === null || Number.isNaN(input.amount)) {
			throw new Error('Transaction amount is missing')
		}
		this.amount = input.amount

		if (!input.category) {
			throw new Error('Transaction category is missing')
		}
		this.category = input.category

		this.vendor = input.vendor

		this.comment = input.comment

		this.ref = input.ref
	}
}
