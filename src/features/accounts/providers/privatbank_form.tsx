import type { Account } from '../interface/account'

const privatbankName = 'Privatbank'

export function PrivatbankAccountAddForm(props: {
	onSubmit: (account: Account) => void
	onCancel: () => void
	isProcessing: boolean
}) {
	const handleSubmit = (e: Event) => {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)
		props.onSubmit({
			name: formData.get('name') as string,
			bankName: privatbankName,
			addedAt: new Date().toISOString(),
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
