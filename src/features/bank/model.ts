// The Entity–attribute–value model pattern is used here
// to represent different bank providers in a flexible way.
//
// https://en.wikipedia.org/wiki/Entity-attribute-value_model

import type { MonobankDetails } from './providers/monobank'
import type { PrivatbankDetails } from './providers/privatbank'
import type { RaiffaisenDetails } from './providers/raiffeisen'

export class Bank {
	public readonly provider: BankProvider

	constructor(provider: BankProvider) {
		if (!provider) {
			throw new Error('Bank details are missing')
		}
		this.provider = provider

		// TODO: track the status of the bank somehow
		// e.g. if the API key was regenerated, and the bank integration is no more valid
		// then the user should know about it
		//
		// This should be done on creation and on further requests too
	}

	public get providerName(): BankProviderName {
		return this.provider.name
	}

	public get providerDetails(): BankProviderDetails | undefined {
		return this.provider.details
	}

	public get isEnabled(): boolean {
		return this.provider.details !== undefined
	}
}

export type BankProvider = | { name: BankProviderName.Monobank, details?: MonobankDetails }
	| { name: BankProviderName.Privatbank, details?: PrivatbankDetails }
	| { name: BankProviderName.Raiffeisen, details?: RaiffaisenDetails }

export enum BankProviderName {
	Monobank = 'monobank',
	Privatbank = 'privatbank',
	Raiffeisen = 'raiffeisen',
}

export type BankProviderDetails = MonobankDetails | PrivatbankDetails | RaiffaisenDetails
