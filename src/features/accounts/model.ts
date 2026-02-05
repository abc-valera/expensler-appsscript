import { BankProviderName } from '../bank/model'

// The Entity–attribute–value model pattern is used here
// to represent different bank providers in a flexible way.
//
// https://en.wikipedia.org/wiki/Entity-attribute-value_model

export class Account {
	public readonly uniqueName: string
	public readonly currency: string
	public readonly addedAt: Date
	public readonly provider: AccountProvider
	public readonly isValid: boolean

	constructor(input: {
		name: string
		currency: string
		addedAt: Date
		accountProvider: AccountProvider
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

		if (!input.accountProvider) {
			throw new Error('Account details are missing')
		}
		this.provider = input.accountProvider
	}
}

export type AccountProvider = MonobankAccountProvider
	| PrivatbankAccountProvider
	| RaiffaisenAccountProvider

export class MonobankAccountProvider {
	public readonly bankProvider: BankProviderName = BankProviderName.Monobank
	public readonly details?: { accountId: string }

	constructor(details?: { accountId: string }) {
		if (details == null) {
			return
		}

		if (!details.accountId) {
			throw new Error('Monobank accountId is missing')
		}

		this.details = details
	}
}

export class PrivatbankAccountProvider {
	public readonly bankProvider: BankProviderName = BankProviderName.Privatbank
}

export class RaiffaisenAccountProvider {
	public readonly bankProvider: BankProviderName = BankProviderName.Raiffeisen
}
