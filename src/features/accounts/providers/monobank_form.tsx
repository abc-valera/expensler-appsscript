import type { Account } from '../interface/account'

const monobankName = 'Monobank'

export function MonobankAccountAddForm(props: {
	onSubmit: (account: Account) => void
	onCancel: () => void
	isProcessing: boolean
}) {
	const handleSubmit = (e: Event) => {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)
		props.onSubmit({
			// TODO: for now it's written like that and not imported from monobank.ts
			// to avoid importing the whole mcc map into the sidebar's script.
			// Should find a way to be able to both import the class and not import the mcc map.
			name: formData.get('name') as string,
			bankName: monobankName,
			addedAt: new Date().toISOString(),
			accountId: formData.get('accountId') as string,
			apiKey: formData.get('apiKey') as string,
		} as unknown as Account)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div class="form-group">
				<label for="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					disabled={props.isProcessing}
				/>
			</div>
			<div class="form-group">
				<label for="accountId">Account ID:</label>
				<input
					type="text"
					id="accountId"
					name="accountId"
					required
					disabled={props.isProcessing}
				/>
			</div>
			<div class="form-group">
				<label for="apiKey">API Key:</label>
				<input
					type="text"
					id="apiKey"
					name="apiKey"
					required
					disabled={props.isProcessing}
				/>
			</div>
			<div class="form-buttons">
				<button type="submit" disabled={props.isProcessing}>
					{props.isProcessing ? 'Saving...' : 'Save'}
				</button>
				<button
					type="button"
					onClick={props.onCancel}
					disabled={props.isProcessing}
				>
					Cancel
				</button>
			</div>
		</form>
	)
}
