import { BankProviderName } from '../bank/model'
import { loadBanks } from '../bank/storage'
import { Account, MonobankAccountProvider, PrivatbankAccountProvider, RaiffaisenAccountProvider } from './model'
import { addAccount, deleteAccount, loadAccounts } from './storage'
import { AccountsSidebarHtml } from './ui_sidebar_html'

export function showAccounts() {
	const htmlOutput = HtmlService.createHtmlOutput(AccountsSidebarHtml() as string)
		.setTitle('Accounts')
		.setWidth(300)

	SpreadsheetApp.getUi().showSidebar(htmlOutput)
}

export function getAccountsData() {
	return loadAccounts()
}

export function deleteAccountDialog() {
	const ui = SpreadsheetApp.getUi()
	const accounts = loadAccounts()

	if (accounts.length === 0) {
		ui.alert('No Accounts', 'No accounts to delete.', ui.ButtonSet.OK)
		return
	}

	const accountList = accounts.map((account, i) => `${i + 1}. ${account.uniqueName} (${account.provider.bankProvider})`).join('\n')
	const prompt = ui.prompt(
		'Delete Account',
		`Select account to delete:\n${accountList}\n\nEnter number:`,
		ui.ButtonSet.OK_CANCEL,
	)

	if (prompt.getSelectedButton() !== ui.Button.OK) {
		return
	}

	const accountIndex = Number.parseInt(prompt.getResponseText().trim()) - 1
	if (accountIndex < 0 || accountIndex >= accounts.length) {
		ui.alert('Error', 'Invalid selection.', ui.ButtonSet.OK)
		return
	}

	const accountToDelete = accounts[accountIndex]
	const confirm = ui.alert(
		'Confirm Delete',
		`Are you sure you want to delete "${accountToDelete.uniqueName}"?`,
		ui.ButtonSet.YES_NO,
	)

	if (confirm === ui.Button.YES) {
		deleteAccount(accountToDelete)
		ui.alert('Success', `Account "${accountToDelete.uniqueName}" deleted successfully!`, ui.ButtonSet.OK)
	}
}

export function addAccountDialog() {
	const ui = SpreadsheetApp.getUi()
	const banksMap = loadBanks()
	const banks = Array.from(banksMap.values())

	if (banks.length === 0) {
		ui.alert('No Banks', 'Please configure a bank integration first.', ui.ButtonSet.OK)
		return
	}

	const bankList = banks.map((bank, i) => `${i + 1}. ${bank.provider.provider}`).join('\n')
	const bankPrompt = ui.prompt(
		'Add Account',
		`Select bank:\n${bankList}\n\nEnter number:`,
		ui.ButtonSet.OK_CANCEL,
	)

	if (bankPrompt.getSelectedButton() !== ui.Button.OK) {
		return
	}

	const bankIndex = Number.parseInt(bankPrompt.getResponseText().trim()) - 1
	if (bankIndex < 0 || bankIndex >= banks.length) {
		ui.alert('Error', 'Invalid bank selection.', ui.ButtonSet.OK)
		return
	}

	const selectedBank = banks[bankIndex]

	const accountIdPrompt = ui.prompt(
		'Add Account',
		'Enter account ID:',
		ui.ButtonSet.OK_CANCEL,
	)

	if (accountIdPrompt.getSelectedButton() !== ui.Button.OK) {
		return
	}

	const accountId = accountIdPrompt.getResponseText().trim()
	if (!accountId) {
		ui.alert('Error', 'Account ID cannot be empty.', ui.ButtonSet.OK)
		return
	}

	const currencyPrompt = ui.prompt(
		'Add Account',
		'Enter currency (e.g., UAH, USD, EUR):',
		ui.ButtonSet.OK_CANCEL,
	)

	if (currencyPrompt.getSelectedButton() !== ui.Button.OK) {
		return
	}

	const currency = currencyPrompt.getResponseText().trim().toUpperCase()
	if (!currency) {
		ui.alert('Error', 'Currency cannot be empty.', ui.ButtonSet.OK)
		return
	}

	const displayNamePrompt = ui.prompt(
		'Add Account',
		'Enter display name:',
		ui.ButtonSet.OK_CANCEL,
	)

	if (displayNamePrompt.getSelectedButton() !== ui.Button.OK) {
		return
	}

	const displayName = displayNamePrompt.getResponseText().trim()
	if (!displayName) {
		ui.alert('Error', 'Display name cannot be empty.', ui.ButtonSet.OK)
		return
	}

	// TODO: before adding a new account check if it's valid

	try {
		const provider = selectedBank.provider.provider
		const details = createAccountDetails(provider, accountId)

		const account = new Account({
			name: displayName,
			currency,
			addedAt: new Date(),
			accountProvider: details,
		})
		addAccount(account)
		ui.alert('Success', `Account "${displayName}" added successfully!`, ui.ButtonSet.OK)
	}
	catch (error) {
		ui.alert('Error', `Failed to add account: ${error}`, ui.ButtonSet.OK)
	}
}

function createAccountDetails(provider: BankProviderName, accountId: string) {
	switch (provider) {
		case BankProviderName.Monobank:
			return new MonobankAccountProvider({ accountId })
		case BankProviderName.Privatbank:
			return new PrivatbankAccountProvider()
		case BankProviderName.Raiffaisen:
			return new RaiffaisenAccountProvider()
		default:
			throw new Error(`Unknown provider: ${provider}`)
	}
}
