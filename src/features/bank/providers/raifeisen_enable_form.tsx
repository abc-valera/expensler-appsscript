import { RaiffaisenDetails } from './raiffeisen'

export function RaiffaisenEnableForm(props: {
	onSubmit: (details: RaiffaisenDetails) => void
	onCancel: () => void
	isProcessing: boolean
}) {
	const handleSubmit = (e: Event) => {
		e.preventDefault()
		props.onSubmit(new RaiffaisenDetails())
	}

	return (
		<form onSubmit={handleSubmit}>
			<div class="form-info">
				Raiffeisen integration configuration coming soon.
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
