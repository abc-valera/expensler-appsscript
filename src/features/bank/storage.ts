import type { BankProvider } from './model'
import { Bank, BankProviderName } from './model'
import { MonobankDetails } from './providers/monobank'
import { PrivatbankDetails } from './providers/privatbank'
import { RaiffaisenDetails } from './providers/raiffeisen'

const PROPERTY_KEY = 'banks'

const initialBanks: Map<BankProviderName, Bank> = new Map([
	[BankProviderName.Monobank, new Bank({ name: BankProviderName.Monobank, details: undefined })],
	[BankProviderName.Privatbank, new Bank({ name: BankProviderName.Privatbank, details: undefined })],
	[BankProviderName.Raiffeisen, new Bank({ name: BankProviderName.Raiffeisen, details: undefined })],
])

export function saveInitialBanksIfNotExist(): void {
	const existingBanks = readBanks()

	for (const [providerName, bank] of initialBanks) {
		if (!existingBanks.has(providerName)) {
			existingBanks.set(providerName, bank)
		}
	}

	saveBanks(existingBanks)
}

export function saveBank(bank: Bank): void {
	const banks = readBanks()
	banks.set(bank.providerName, bank)
	saveBanks(banks)
}

function saveBanks(banks: Map<BankProviderName, Bank>): void {
	const data: Record<string, unknown> = {}
	for (const [providerName, bank] of banks) {
		data[providerName] = bank.provider
	}
	const serialized = JSON.stringify(data)
	PropertiesService.getDocumentProperties().setProperty(PROPERTY_KEY, serialized)
}

function deserializeBankProvider(data: Record<string, unknown>): BankProvider {
	const name = data.name as BankProviderName
	const detailsData = data.details as Record<string, unknown> | undefined

	switch (name) {
		case BankProviderName.Monobank:
			return {
				name: BankProviderName.Monobank,
				details: detailsData ? MonobankDetails.NewFromUnknown(detailsData) : undefined,
			}
		case BankProviderName.Privatbank:
			return {
				name: BankProviderName.Privatbank,
				details: detailsData ? PrivatbankDetails.NewFromUnknown(detailsData) : undefined,
			}
		case BankProviderName.Raiffeisen:
			return {
				name: BankProviderName.Raiffeisen,
				details: detailsData ? RaiffaisenDetails.NewFromUnknown(detailsData) : undefined,
			}
		default:
			throw new Error(`Unsupported bank provider: ${name}`)
	}
}

export function readBanks(): Map<BankProviderName, Bank> {
	const serialized = PropertiesService.getDocumentProperties().getProperty(PROPERTY_KEY)
	if (!serialized) {
		return new Map()
	}

	try {
		const data = JSON.parse(serialized) as Record<string, Record<string, unknown>>
		const banks = new Map<BankProviderName, Bank>()

		for (const [providerName, providerData] of Object.entries(data)) {
			const provider = deserializeBankProvider(providerData)
			banks.set(providerName as BankProviderName, new Bank(provider))
		}

		return banks
	}
	catch (error) {
		Logger.log(`Error loading banks: ${error}`)
		return new Map()
	}
}

export function readBanksArray() {
	return Array.from(readBanks().values())
}
