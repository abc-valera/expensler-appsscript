import { BankProvider } from '../bank/bank'

// The Entity–attribute–value model pattern is used here
// to represent different bank providers in a flexible way.
//
// https://en.wikipedia.org/wiki/Entity-attribute-value_model

export class Account {
	public readonly uniqueName: string
	public readonly currency: string
	public readonly addedAt: Date
	public readonly isValid: boolean
	public readonly details: AccountDetails

	constructor(input: {
		name: string
		currency: string
		addedAt: Date
		provider: BankProvider
		details: AccountDetails
	}) {
		if (!input.currency) {
			throw new Error('Account currency is missing')
		}
		this.currency = input.currency

		if (!input.name) {
			throw new Error('Account display name is missing')
		}
		this.uniqueName = input.name

		if (!input.addedAt) {
			throw new Error('Account addedAt is missing')
		}
		this.addedAt = input.addedAt

		// TODO: track the status of the account somehow
		// e.g. if the account was removed and is no more valid then the user should know about it
		// This should be done on creation and on further requests too.
		this.isValid = true

		if (!input.details) {
			throw new Error('Account details are missing')
		}
		this.details = input.details
	}
}

export type AccountDetails = MonobankAccountDetails
	| PrivatbankAccountDetails
	| RaiffaisenAccountDetails

export class MonobankAccountDetails {
	public readonly provider: BankProvider = BankProvider.Monobank
	public readonly accountId: string

	constructor(input: { accountId: string }) {
		if (!input.accountId) {
			throw new Error('Monobank accountId is missing')
		}
		this.accountId = input.accountId
	}
}

export class PrivatbankAccountDetails {
	public readonly provider: BankProvider = BankProvider.Privatbank
}

export class RaiffaisenAccountDetails {
	public readonly provider: BankProvider = BankProvider.Raiffaisen
}
