import type { Account } from '../interface/account'
import { createSignal, For, onMount, Show } from 'solid-js'
import { createStore } from 'solid-js/store'
import { render } from 'solid-js/web'
import { MonobankAccountAddForm } from '../providers/monobank_form'
import { PrivatbankAccountAddForm } from '../providers/privatbank_form'
import { RaifeisenAccountAddForm } from '../providers/raifeisen_form'

function AccountsSidebarApp() {
	const [accounts, setAccounts] = createStore<Account[]>([])
	const [areAccountsLoading, setAreAccountsLoading] = createSignal(true)
	const [accountsLoadingError, setAccountsLoadingError] = createSignal<Error | null>(null)

	const [isFormProcessing, setIsFormProcessing] = createSignal(false)
	const [formProcessingError, setFormProcessingError] = createSignal<Error | null>(null)
	const [form, setForm] = createSignal<'monobank' | 'privatbank' | 'raifeisen' | null>(null)

	const loadAccounts = () => {
		setAreAccountsLoading(true)
		setAccountsLoadingError(null)
		google.script.run
			.withSuccessHandler((data: Account[]) => {
				setAccounts(data)
				setAreAccountsLoading(false)
			})
			.withFailureHandler((err: Error) => {
				console.error('Failed to load accounts:', err)
				setAccountsLoadingError(err)
				setAreAccountsLoading(false)
			})
			.readAccountsArray()
	}

	const handleFormSubmit = (account: Account) => {
		setIsFormProcessing(true)
		setFormProcessingError(null)
		google.script.run
			.withSuccessHandler(() => {
				setIsFormProcessing(false)
				setForm(null)
				loadAccounts()
			})
			.withFailureHandler((err: Error) => {
				console.error('Failed to add account:', err)
				setIsFormProcessing(false)
				setFormProcessingError(err)
			})
			.addAccount(account)
	}

	const handleDelete = (accountName: string) => {
		setIsFormProcessing(true)
		setAccountsLoadingError(null)
		google.script.run
			.withSuccessHandler(() => {
				setIsFormProcessing(false)
				loadAccounts()
			})
			.withFailureHandler((err: Error) => {
				console.error('Failed to delete account:', err)
				setIsFormProcessing(false)
				setAccountsLoadingError(err)
			})
			.deleteAccount(accountName)
	}

	const handleFormCancel = () => {
		setForm(null)
		setFormProcessingError(null)
	}

	onMount(() => {
		loadAccounts()
	})

	return (
		<div>
			<Show when={!areAccountsLoading()} fallback={<LoadingScreen />}>
				<Show when={!accountsLoadingError()} fallback={<ErrorScreen err={accountsLoadingError()!} onRetry={loadAccounts} />}>
					<div class="accounts-list">
						<For each={accounts} fallback={<div class="empty-state">No accounts added yet.</div>}>
							{account => (
								<AccountItem
									account={account}
									onDelete={handleDelete}
									isProcessing={isFormProcessing()}
								/>
							)}
						</For>
					</div>

					<div class="add-section">
						<Show when={form() === null}>
							<div class="add-buttons">
								<button class="add-btn" onClick={() => setForm('monobank')}>
									+ Monobank
								</button>
								<button class="add-btn" onClick={() => setForm('privatbank')}>
									+ Privatbank
								</button>
								<button class="add-btn" onClick={() => setForm('raifeisen')}>
									+ Raifeisen
								</button>
							</div>
						</Show>

						<Show when={form() !== null}>
							<div class="add-form-container">
								<div class="add-form-header">
									<span class="add-form-title">
										Add
										{' '}
										{form() === 'monobank' ? 'Monobank' : form() === 'privatbank' ? 'Privatbank' : 'Raifeisen'}
										{' '}
										account
									</span>
								</div>

								<Show when={formProcessingError()}>
									<div class="form-error">
										<span>{formProcessingError()!.message}</span>
									</div>
								</Show>

								<Show when={form() === 'monobank'}>
									<MonobankAccountAddForm
										onSubmit={handleFormSubmit}
										onCancel={handleFormCancel}
										isProcessing={isFormProcessing()}
									/>
								</Show>

								<Show when={form() === 'privatbank'}>
									<PrivatbankAccountAddForm
										onSubmit={handleFormSubmit}
										onCancel={handleFormCancel}
										isProcessing={isFormProcessing()}
									/>
								</Show>

								<Show when={form() === 'raifeisen'}>
									<RaifeisenAccountAddForm
										onSubmit={handleFormSubmit}
										onCancel={handleFormCancel}
										isProcessing={isFormProcessing()}
									/>
								</Show>
							</div>
						</Show>
					</div>
				</Show>
			</Show>
		</div>
	)
}

function AccountItem(props: {
	account: Account
	onDelete: (name: string) => void
	isProcessing: boolean
}) {
	return (
		<div class="account-item">
			<div class="account-header">
				<span class="account-name">{props.account.name}</span>
				<span class="account-bank">{props.account.bankName}</span>
			</div>
			<div class="account-meta">
				Added
				{props.account.addedAt.toString()}
			</div>
			<button
				class="delete-btn"
				onClick={() => props.onDelete(props.account.name)}
				disabled={props.isProcessing}
			>
				Remove
			</button>
		</div>
	)
}

function LoadingScreen() {
	return (
		<div class="loading-screen">
			<div class="loading-spinner"></div>
			<div class="loading-message">Loading accounts...</div>
		</div>
	)
}

function ErrorScreen(props: { err: Error, onRetry: () => void }) {
	return (
		<div class="error-screen">
			<div class="error-icon">⚠️</div>
			<div class="error-message">{props.err.message || props.err.name || 'Unknown error occurred'}</div>
			<button class="retry-button" onClick={props.onRetry}>Retry</button>
		</div>
	)
}

render(() => <AccountsSidebarApp />, document.getElementById('app')!)
