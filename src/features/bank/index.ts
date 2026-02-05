import type { BankProvider } from './model'
import type { MonobankDetails } from './providers/monobank'
import type { PrivatbankDetails } from './providers/privatbank'
import type { RaiffaisenDetails } from './providers/raiffeisen'
import { Bank, BankProviderName } from './model'
import { readBanksArray, saveBank } from './storage'

export function BankSidebar() {
	const htmlContent = HtmlService.createHtmlOutputFromFile('features/bank/sidebar')
		.setTitle('Bank Integrations')
		.setWidth(300)

	SpreadsheetApp.getUi().showSidebar(htmlContent)
}

// TODO: move this elsewhere
export function enableBankIntegration(
	providerName: BankProviderName,
	details: MonobankDetails | PrivatbankDetails | RaiffaisenDetails,
) {
	let provider: BankProvider

	switch (providerName) {
		case BankProviderName.Monobank:
			provider = { name: BankProviderName.Monobank, details: details as MonobankDetails }
			break
		case BankProviderName.Privatbank:
			provider = { name: BankProviderName.Privatbank, details: details as PrivatbankDetails }
			break
		case BankProviderName.Raiffeisen:
			provider = { name: BankProviderName.Raiffeisen, details: details as RaiffaisenDetails }
			break
		default:
			throw new Error(`Unsupported provider: ${providerName}`)
	}

	saveBank(new Bank(provider))
}

// TODO: move this elsewhere
export function disableBankIntegration(providerName: BankProviderName) {
	let provider: BankProvider

	switch (providerName) {
		case BankProviderName.Monobank:
			provider = { name: BankProviderName.Monobank, details: undefined }
			break
		case BankProviderName.Privatbank:
			provider = { name: BankProviderName.Privatbank, details: undefined }
			break
		case BankProviderName.Raiffeisen:
			provider = { name: BankProviderName.Raiffeisen, details: undefined }
			break
		default:
			throw new Error(`Unsupported provider: ${providerName}`)
	}

	saveBank(new Bank(provider))
}

export function getBanksData() {
	const banks = readBanksArray()
	return banks.map(bank => ({
		providerName: {
			providerName: bank.providerName,
			details: bank.providerDetails,
		},
		isEnabled: bank.isEnabled,
	}))
}

export function showSuccessMessage(message: string) {
	SpreadsheetApp.getUi().alert('Success', message, SpreadsheetApp.getUi().ButtonSet.OK)
}

export function showErrorMessage(message: string) {
	SpreadsheetApp.getUi().alert('Error', message, SpreadsheetApp.getUi().ButtonSet.OK)
}
