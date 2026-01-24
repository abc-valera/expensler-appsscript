import type { AccountDetails } from './model'
import { Account, MonobankAccountDetails, PrivatbankAccountDetails, RaiffaisenAccountDetails } from './model'

const PROPERTY_KEY = 'accounts'

export function saveAccounts(accounts: Account[]): void {
	const serialized = JSON.stringify(accounts)
	PropertiesService.getDocumentProperties().setProperty(PROPERTY_KEY, serialized)
}

function deserializeAccountDetails(details: any): AccountDetails {
	const provider = details.provider
	switch (provider) {
		case 'monobank':
			return new MonobankAccountDetails({ accountId: details.accountId })
		case 'privatbank':
			return new PrivatbankAccountDetails()
		case 'raiffaisen':
			return new RaiffaisenAccountDetails()
		default:
			throw new Error(`Unknown provider: ${provider}`)
	}
}

export function loadAccounts(): Account[] {
	const serialized = PropertiesService.getDocumentProperties().getProperty(PROPERTY_KEY)
	if (!serialized) {
		return []
	}

	try {
		const parsed = JSON.parse(serialized)
		return parsed.map((item: any) => {
			const details = deserializeAccountDetails(item.details)
			return new Account({
				name: item.uniqueName,
				currency: item.currency,
				addedAt: new Date(item.addedAt),
				provider: details.provider,
				details,
			})
		})
	}
	catch (error) {
		Logger.log(`Error loading accounts: ${error}`)
		return []
	}
}

function accountsMatch(a: Account, b: Account): boolean {
	return a.uniqueName === b.uniqueName && a.details.provider === b.details.provider
}

export function addAccount(account: Account): void {
	const accounts = loadAccounts()

	const existingIndex = accounts.findIndex(a => accountsMatch(a, account))
	if (existingIndex !== -1) {
		accounts[existingIndex] = account
	}
	else {
		accounts.push(account)
	}

	saveAccounts(accounts)
}

export function updateAccount(updatedAccount: Account): void {
	const accounts = loadAccounts()
	const index = accounts.findIndex(a => accountsMatch(a, updatedAccount))
	if (index === -1) {
		throw new Error('Account not found')
	}
	accounts[index] = updatedAccount
	saveAccounts(accounts)
}

export function deleteAccount(account: Account): void {
	const accounts = loadAccounts()
	const filtered = accounts.filter(a => !accountsMatch(a, account))
	saveAccounts(filtered)
}
