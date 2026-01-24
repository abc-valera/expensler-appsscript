import { Bank, BankProvider, MonobankBankDetails } from './bank'
import { deleteBank, loadBanks, saveBank } from './storage'
import uiSidebarHtml from './ui_sidebar.html'

export function showBankIntegrations() {
	const htmlOutput = HtmlService.createHtmlOutput(uiSidebarHtml)
		.setTitle('Bank Integrations')
		.setWidth(300)

	SpreadsheetApp.getUi().showSidebar(htmlOutput)
}

interface BankData {
	provider: BankProvider
	apiKey: string
}

export function getBanksData(): BankData[] {
	const banks = loadBanks()
	return banks.map((bank) => {
		let apiKey = ''
		if (bank.details instanceof MonobankBankDetails) {
			apiKey = bank.details.apiKey
		}

		return {
			provider: bank.details.provider,
			apiKey,
		}
	})
}

export function addBankIntegration() {
	const ui = SpreadsheetApp.getUi()

	// Show available bank providers
	const availableProviders = [BankProvider.Monobank, BankProvider.Privatbank, BankProvider.Raiffaisen]
	const bankList = availableProviders.map((provider, i) => `${i + 1}. ${provider}`).join('\n')
	const bankPrompt = ui.prompt(
		'Configure Bank Integration',
		`Select bank to configure:\n${bankList}\n\nEnter number:`,
		ui.ButtonSet.OK_CANCEL,
	)

	if (bankPrompt.getSelectedButton() !== ui.Button.OK) {
		return
	}

	const bankIndex = Number.parseInt(bankPrompt.getResponseText().trim()) - 1
	if (bankIndex < 0 || bankIndex >= availableProviders.length) {
		ui.alert('Error', 'Invalid bank selection.', ui.ButtonSet.OK)
		return
	}

	const selectedProvider = availableProviders[bankIndex]

	if (selectedProvider !== BankProvider.Monobank) {
		ui.alert('Error', `${selectedProvider} is not implemented yet.`, ui.ButtonSet.OK)
		return
	}

	const apiKeyPrompt = ui.prompt(
		'Configure Bank Integration',
		`Enter API key for ${selectedProvider}:`,
		ui.ButtonSet.OK_CANCEL,
	)

	if (apiKeyPrompt.getSelectedButton() !== ui.Button.OK) {
		return
	}

	const apiKey = apiKeyPrompt.getResponseText().trim()
	if (!apiKey) {
		ui.alert('Error', 'API key cannot be empty.', ui.ButtonSet.OK)
		return
	}

	try {
		const details = new MonobankBankDetails({ apiKey })
		const bank = new Bank({ details })
		saveBank(bank)
		ui.alert('Success', `Bank integration for ${selectedProvider} configured successfully!`, ui.ButtonSet.OK)
	}
	catch (error) {
		ui.alert('Error', `Failed to configure bank integration: ${error}`, ui.ButtonSet.OK)
	}
}

export function deleteBankIntegration() {
	const ui = SpreadsheetApp.getUi()
	const banks = loadBanks()

	if (banks.length === 0) {
		ui.alert('No Banks', 'No bank integrations to delete.', ui.ButtonSet.OK)
		return
	}

	const bankList = banks.map((bank, i) => `${i + 1}. ${bank.details.provider}`).join('\n')
	const prompt = ui.prompt(
		'Delete Bank Integration',
		`Select bank to delete:\n${bankList}\n\nEnter number:`,
		ui.ButtonSet.OK_CANCEL,
	)

	if (prompt.getSelectedButton() !== ui.Button.OK) {
		return
	}

	const bankIndex = Number.parseInt(prompt.getResponseText().trim()) - 1
	if (bankIndex < 0 || bankIndex >= banks.length) {
		ui.alert('Error', 'Invalid selection.', ui.ButtonSet.OK)
		return
	}

	const bankToDelete = banks[bankIndex]
	const confirm = ui.alert(
		'Confirm Delete',
		`Are you sure you want to delete "${bankToDelete.details.provider}"?`,
		ui.ButtonSet.YES_NO,
	)

	if (confirm === ui.Button.YES) {
		deleteBank(bankToDelete.details.provider)
		ui.alert('Success', `Bank integration "${bankToDelete.details.provider}" has been deleted!`, ui.ButtonSet.OK)
	}
}
