import type { AccountProvider } from './model'
import { Account, MonobankAccountProvider, PrivatbankAccountProvider, RaiffaisenAccountProvider } from './model'

const PROPERTY_KEY = 'accounts'

export function saveAccounts(accounts: Account[]): void {
	const serialized = JSON.stringify(accounts)
	PropertiesService.getDocumentProperties().setProperty(PROPERTY_KEY, serialized)
}

function deserializeAccountDetails(details: any): AccountProvider {
	const provider = details.provider
	switch (provider) {
		case 'monobank':
			return new MonobankAccountProvider({ accountId: details.accountId })
		case 'privatbank':
			return new PrivatbankAccountProvider()
		case 'raiffaisen':
			return new RaiffaisenAccountProvider()
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
				accountProvider: details,
			})
		})
	}
	catch (error) {
		Logger.log(`Error loading accounts: ${error}`)
		return []
	}
}

function accountsMatch(a: Account, b: Account): boolean {
	return a.uniqueName === b.uniqueName && a.provider.bankProvider === b.provider.bankProvider
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
