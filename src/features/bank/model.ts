// The Entity–attribute–value model pattern is used here
// to represent different bank providers in a flexible way.
//
// https://en.wikipedia.org/wiki/Entity-attribute-value_model

export class Bank {
	public readonly provider: BankProvider
	public readonly isValid: boolean

	constructor(input: { provider: BankProvider }) {
		if (!input.provider) {
			throw new Error('Bank details are missing')
		}
		this.provider = input.provider

		this.isValid = false
		if (input.provider.details != null) {
			// TODO: track the status of the bank somehow
			// e.g. if the API key was regenerated, and the bank integration is no more valid
			// then the user should know about it
			//
			// This should be done on creation and on further requests too
			this.isValid = true
		}
	}
}

export type BankProvider = MonobankBankProvider
	| PrivatbankBankProvider
	| RaiffaisenBankProvider

export enum BankProviderName {
	Monobank = 'monobank',
	Privatbank = 'privatbank',
	Raiffaisen = 'raiffaisen',
}

export class MonobankBankProvider {
	public readonly provider: BankProviderName = BankProviderName.Monobank
	public readonly details?: { apiKey: string }

	constructor(details?: { apiKey: string }) {
		if (details == null) {
			return
		}

		if (!details.apiKey) {
			throw new Error('Monobank API key is missing')
		}

		this.details = details
	}

	public static NewFromUnknown(data: Record<string, unknown>): MonobankBankProvider {
		const detailsData = data.details as Record<string, unknown> | undefined

		let details: { apiKey: string } | undefined

		if (detailsData) {
			const apiKey = detailsData.apiKey as string | undefined

			if (apiKey) {
				details = { apiKey }
			}
		}

		return new MonobankBankProvider(details)
	}
}

export class PrivatbankBankProvider {
	public readonly provider: BankProviderName = BankProviderName.Privatbank
	public readonly details?: unknown
}

export class RaiffaisenBankProvider {
	public readonly provider: BankProviderName = BankProviderName.Raiffaisen
	public readonly details?: unknown
}
