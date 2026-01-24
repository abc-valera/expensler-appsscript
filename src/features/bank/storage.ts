import { Bank, BankProvider, MonobankBankDetails, PrivatbankBankDetails, RaiffaisenBankDetails } from './bank'

const PROPERTY_KEY = 'banks'

export function saveBank(bank: Bank): void {
	const banks = loadBanks()
	const existingIndex = banks.findIndex(b => b.details.provider === bank.details.provider)
	if (existingIndex !== -1) {
		banks[existingIndex] = bank
	}
	else {
		banks.push(bank)
	}
	saveBanks(banks)
}

export function loadBanks(): Bank[] {
	const serialized = PropertiesService.getDocumentProperties().getProperty(PROPERTY_KEY)

	if (!serialized) {
		return []
	}

	try {
		const data = JSON.parse(serialized) as Array<Record<string, unknown>>
		return data.map((bankData) => {
			const provider = bankData.provider as BankProvider
			const details = deserializeBank(provider, bankData)
			return new Bank({ details })
		})
	}
	catch (error) {
		Logger.log(`Error loading banks: ${error}`)
		return []
	}
}

export function deleteBank(provider: BankProvider): void {
	const banks = loadBanks()
	const filtered = banks.filter(b => b.details.provider !== provider)
	saveBanks(filtered)
}

function saveBanks(banks: Bank[]): void {
	const data = banks.map(bank => bank.details)
	const serialized = JSON.stringify(data)
	PropertiesService.getDocumentProperties().setProperty(PROPERTY_KEY, serialized)
}

function deserializeBank(
	provider: BankProvider,
	data: Record<string, unknown>,
): MonobankBankDetails | PrivatbankBankDetails | RaiffaisenBankDetails {
	switch (provider) {
		case BankProvider.Monobank:
			return new MonobankBankDetails({ apiKey: (data.apiKey as string) })
		case BankProvider.Privatbank:
			return new PrivatbankBankDetails()
		case BankProvider.Raiffaisen:
			return new RaiffaisenBankDetails()
		default:
			throw new Error(`Unsupported bank provider: ${provider}`)
	}
}
