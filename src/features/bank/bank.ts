// The Entity–attribute–value model pattern is used here
// to represent different bank providers in a flexible way.
//
// https://en.wikipedia.org/wiki/Entity-attribute-value_model

export class Bank {
	public readonly details: BankDetails
	public readonly isValid: boolean

	constructor(input: { details: BankDetails }) {
		if (!input.details) {
			throw new Error('Bank details are missing')
		}
		this.details = input.details

		// TODO: track the status of the bank somehow
		// e.g. if the API key was regenerated, and the bank integration is no more valid
		// then the user should know about it
		//
		// This should be done on creation and on further requests too

		this.isValid = true
	}
}

export type BankDetails = MonobankBankDetails
	| PrivatbankBankDetails
	| RaiffaisenBankDetails

export enum BankProvider {
	Monobank = 'monobank',
	Privatbank = 'privatbank',
	Raiffaisen = 'raiffaisen',
}

export class MonobankBankDetails {
	public readonly provider: BankProvider = BankProvider.Monobank
	public readonly apiKey: string

	constructor(input: { apiKey: string }) {
		if (!input.apiKey) {
			throw new Error('Monobank API key is missing')
		}
		this.apiKey = input.apiKey

		// TODO: validate that the apiKey is valid via a request to Monobank API
	}
}

export class PrivatbankBankDetails {
	public readonly provider: BankProvider = BankProvider.Privatbank
}

export class RaiffaisenBankDetails {
	public readonly provider: BankProvider = BankProvider.Raiffaisen
}
