import { MonobankDetails } from './monobank'

export function MonobankEnableForm(props: {
	onSubmit: (details: MonobankDetails) => void
	onCancel: () => void
	isProcessing: boolean
}) {
	const handleSubmit = (e: Event) => {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)
		const apiKey = formData.get('apiKey') as string

		props.onSubmit(new MonobankDetails({ apiKey }))
	}

	return (
		<form onSubmit={handleSubmit}>
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
