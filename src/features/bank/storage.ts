import { Bank, BankProviderName, MonobankBankProvider, PrivatbankBankProvider, RaiffaisenBankProvider } from './model'

const PROPERTY_KEY = 'banks'

const initialBanks: Map<BankProviderName, Bank> = new Map([
	[BankProviderName.Monobank, new Bank({ provider: new MonobankBankProvider() })],
	[BankProviderName.Privatbank, new Bank({ provider: new PrivatbankBankProvider() })],
	[BankProviderName.Raiffaisen, new Bank({ provider: new RaiffaisenBankProvider() })],
])

export function saveInitialBanksIfNotExist(): void {
	const existingBanks = loadBanks()

	for (const [providerName, bank] of initialBanks) {
		if (!existingBanks.has(providerName)) {
			existingBanks.set(providerName, bank)
		}
	}

	saveBanks(existingBanks)
}

export function saveBank(bank: Bank): void {
	const banks = loadBanks()
	banks.set(bank.provider.provider, bank)
	saveBanks(banks)
}

export function loadBanks(): Map<BankProviderName, Bank> {
	const serialized = PropertiesService.getDocumentProperties().getProperty(PROPERTY_KEY)
	if (!serialized) {
		return new Map()
	}

	try {
		const data = JSON.parse(serialized) as Record<string, Record<string, unknown>>
		const banks = new Map<BankProviderName, Bank>()

		for (const [providerName, bankData] of Object.entries(data)) {
			const provider = providerName as BankProviderName
			const details = deserializeBank(provider, bankData)
			banks.set(provider, new Bank({ provider: details }))
		}

		return banks
	}
	catch (error) {
		Logger.log(`Error loading banks: ${error}`)
		return new Map()
	}
}

export function deleteBank(provider: BankProviderName): void {
	const banks = loadBanks()
	banks.delete(provider)
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

function deserializeBank(
	provider: BankProviderName,
	data: Record<string, unknown>,
): MonobankBankProvider | PrivatbankBankProvider | RaiffaisenBankProvider {
	switch (provider) {
		case BankProviderName.Monobank:
			return MonobankBankProvider.NewFromUnknown(data)
		case BankProviderName.Privatbank:
			return new PrivatbankBankProvider()
		case BankProviderName.Raiffaisen:
			return new RaiffaisenBankProvider()
		default:
			throw new Error(`Unsupported bank provider: ${provider}`)
	}
}
