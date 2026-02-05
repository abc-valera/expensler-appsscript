import type { Bank, BankProviderDetails } from './model'
import { createSignal, For, onMount, Show } from 'solid-js'
import { createStore } from 'solid-js/store'
import { render } from 'solid-js/web'
import { BankProviderName } from './model'
import { MonobankEnableForm } from './providers/monobank_enable_form'
import { PrivatbankEnableForm } from './providers/privatbank_enable_form'
import { RaiffaisenEnableForm } from './providers/raifeisen_enable_form'

function BankSidebarApp() {
	const [banksDisplay, setBanksDisplay] = createStore<Bank[]>([])
	const [isLoading, setIsLoading] = createSignal(false)
	const [error, setError] = createSignal<Error | null>(null)

	const loadBanks = () => {
		setIsLoading(true)
		setError(null)
		google.script.run
			.withSuccessHandler((data: Bank[]) => {
				setBanksDisplay(data)
				setIsLoading(false)
			})
			.withFailureHandler((error: Error) => {
				console.error('Failed to load banks:', error)
				setError(error)
				setIsLoading(false)
			})
			.getBanksData()
	}

	const updateBank = (provider: string, updatedData: Partial<Bank>) => {
		const index = banksDisplay.findIndex(b => b.providerName === provider)
		if (index !== -1) {
			setBanksDisplay(index, updatedData)
		}
	}

	onMount(() => {
		loadBanks()
	})

	return (
		<div>
			<Show when={!isLoading()} fallback={<LoadingScreen />}>
				<Show when={!error()} fallback={<ErrorScreen err={error()!} onRetry={loadBanks} />}>
					<BankList banks={banksDisplay} updateBank={updateBank} />
				</Show>
			</Show>
		</div>
	)
}

function LoadingScreen() {
	return (
		<div class="loading-screen">
			<div class="loading-spinner"></div>
			<div class="loading-message">Loading bank integrations...</div>
		</div>
	)
}

function BankList(props: { banks: Bank[], updateBank: (provider: string, data: Partial<Bank>) => void }) {
	return (
		<Show when={props.banks.length > 0} fallback={<div class="no-banks">No bank integrations found.</div>}>
			<div class="bank-list">
				<For each={props.banks}>
					{bank => <BankItem bank={bank} updateBank={props.updateBank} />}
				</For>
			</div>
		</Show>
	)
}

function BankItem(props: { bank: Bank, updateBank: (provider: string, data: Partial<Bank>) => void }) {
	const [isEnabled, setIsEnabled] = createSignal(props.bank.isEnabled)
	const [showForm, setShowForm] = createSignal(false)
	const [isProcessing, setIsProcessing] = createSignal(false)
	const [error, setError] = createSignal<Error | null>(null)

	const provider = () => props.bank.providerName
	const statusClass = () => isEnabled() ? 'status-enabled' : 'status-disabled'
	const statusText = () => isEnabled() ? '✓ Enabled' : '✗ Disabled'

	const handleEnableClick = () => {
		setShowForm(true)
		setError(null)
	}

	const handleFormSubmit = (data: BankProviderDetails) => {
		setIsProcessing(true)
		setError(null)

		google.script.run
			.withSuccessHandler((result: unknown) => {
				// Backend returns null on success
				if (result === null) {
					setIsProcessing(false)
					setShowForm(false)
					setError(null)
					setIsEnabled(true)
				}
			})
			.withFailureHandler((error: Error) => {
				console.error('Failure handler called with error:', error)
				setIsProcessing(false)
				setError(error)
			})
			.enableBankIntegration(provider(), data)
	}

	const handleDisableClick = () => {
		setIsProcessing(true)
		setError(null)

		google.script.run
			.withSuccessHandler((result: unknown) => {
				if (result === null) {
					setIsProcessing(false)
					setError(null)
					setIsEnabled(false)
				}
			})
			.withFailureHandler((error: Error) => {
				console.error('Failure handler called with error:', error)
				setIsProcessing(false)
				setError(error)
			})
			.disableBankIntegration(provider())
	}

	return (
		<div class="bank-item">
			<div class="bank-header">
				<span class="bank-name">{provider()}</span>
				<span class={statusClass()}>{statusText()}</span>
			</div>

			<Show when={error()}>
				<div class="bank-error">
					<span class="error-icon">⚠️</span>
					<span class="error-message">{error()!.message}</span>
				</div>
			</Show>

			<Show when={!isEnabled()}>
				<button
					class="enable-btn"
					onClick={handleEnableClick}
					disabled={isProcessing()}
				>
					{isProcessing() ? 'Processing...' : 'Enable'}
				</button>

				<Show when={showForm()}>
					<div class="enable-form">
						<BankEnableForm
							provider={provider()}
							onSubmit={handleFormSubmit}
							onCancel={() => {
								setShowForm(false)
								setError(null)
							}}
							isProcessing={isProcessing()}
						/>
					</div>
				</Show>
			</Show>

			<Show when={isEnabled()}>
				<button
					class="disable-btn"
					onClick={handleDisableClick}
					disabled={isProcessing()}
				>
					{isProcessing() ? 'Processing...' : 'Disable'}
				</button>
			</Show>
		</div>
	)
}

export function BankEnableForm(props: {
	provider: BankProviderName
	onSubmit: (data: BankProviderDetails) => void
	onCancel: () => void
	isProcessing: boolean
}) {
	return (
		<div>
			<Show when={props.provider === BankProviderName.Monobank}>
				<MonobankEnableForm
					onSubmit={props.onSubmit}
					onCancel={props.onCancel}
					isProcessing={props.isProcessing}
				/>
			</Show>

			<Show when={props.provider === BankProviderName.Privatbank}>
				<PrivatbankEnableForm
					onSubmit={props.onSubmit}
					onCancel={props.onCancel}
					isProcessing={props.isProcessing}
				/>
			</Show>

			<Show when={props.provider === BankProviderName.Raiffeisen}>
				<RaiffaisenEnableForm
					onSubmit={props.onSubmit}
					onCancel={props.onCancel}
					isProcessing={props.isProcessing}
				/>
			</Show>
		</div>
	)
}

function ErrorScreen(props: { err: Error, onRetry: () => void }) {
	return (
		<div class="error-screen">
			<div class="error-icon">⚠️</div>
			<div class="error-message">{props.err.message || props.err.name || 'Unknown error occurred'}</div>
			<button class="retry-button" onClick={props.onRetry}>
				Retry
			</button>
		</div>
	)
}

render(() => <BankSidebarApp />, document.getElementById('app')!)
