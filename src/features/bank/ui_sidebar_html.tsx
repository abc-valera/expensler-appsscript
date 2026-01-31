import { SidebarPage } from '../../shared/html_page'
import { showHtmlDialog } from '../../shared/message_dialog'
import { MonobankEnableForm } from '../transactions/providers/monobank_ui'
import { Bank, BankProviderName, MonobankBankProvider, PrivatbankBankProvider, RaiffaisenBankProvider } from './model'
import { loadBanks, saveBank } from './storage'
import clientScript from './ui_sidebar.client.js'
import styles from './ui_sidebar.css'

export function BankSidebar() {
	const html = (
		<SidebarPage styles={styles}>
			<h2>Bank Providers</h2>
			<BankListHtml banks={Array.from(loadBanks().values())} />
			<script>{clientScript}</script>
		</SidebarPage>
	).toString()

	SpreadsheetApp.getUi().showSidebar(HtmlService.createHtmlOutput(html)
		.setTitle('Bank Integrations')
		.setWidth(300),
	)
}

function BankListHtml({ banks }: { banks: Bank[] }) {
	if (banks.length === 0) {
		return <div class="empty-state">No bank providers configured yet.</div>
	}

	return (
		<div class="bank-list">
			{banks.map(bank => (
				<BankItemHtml bank={bank} />
			))}
		</div>
	)
}

function BankItemHtml({ bank }: { bank: Bank }) {
	const statusClass = bank.isValid ? 'status-enabled' : 'status-disabled'
	const statusText = bank.isValid ? '✓ Enabled' : '✗ Disabled'

	return (
		<div class="bank-item">
			<div class="bank-header">
				<span class="bank-name">{bank.provider.provider}</span>
				<span class={statusClass}>{statusText}</span>
			</div>
			{!bank.provider.details && (
				<>
					<button class="enable-btn" onclick={`showEnableForm('${bank.provider.provider}')`}>
						Enable
					</button>
					<div id={`form-${bank.provider.provider}`} class="enable-form" style="display: none;">
						<BankEnableForm provider={bank.provider.provider} />
					</div>
				</>
			)}
		</div>
	)
}

function BankEnableForm({ provider }: { provider: string }) {
	switch (provider) {
		case 'monobank':
			return <MonobankEnableForm />
		case 'privatbank':
			return (
				<form onsubmit={`handleEnable(event, '${provider}')`}>
				</form>
			)
		case 'raiffaisen':
			return (
				<form onsubmit={`handleEnable(event, '${provider}')`}>
				</form>
			)
		default:
			return <div>Unsupported provider</div>
	}
}

export function enableBankIntegration(providerName: string, data: Record<string, string>) {
	let provider: MonobankBankProvider | PrivatbankBankProvider | RaiffaisenBankProvider

	switch (providerName as BankProviderName) {
		case BankProviderName.Monobank:
			provider = new MonobankBankProvider({ apiKey: data.apiKey })
			break
		case BankProviderName.Privatbank:
			// TODO: Update PrivatbankBankProvider to accept details
			provider = new PrivatbankBankProvider()
			break
		case BankProviderName.Raiffaisen:
			// TODO: Update RaiffaisenBankProvider to accept details
			provider = new RaiffaisenBankProvider()
			break
		default:
			throw new Error(`Unsupported provider: ${providerName}`)
	}

	const bank = new Bank({ provider })
	saveBank(bank)
}

export function showSuccessMessage(message: string) {
	showHtmlDialog({ message, type: 'info' })
}

export function showErrorMessage(message: string) {
	showHtmlDialog({ message, type: 'error' })
}
