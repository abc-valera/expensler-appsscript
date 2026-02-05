import { PrivatbankDetails } from './privatbank'

export function PrivatbankEnableForm(props: {
	onSubmit: (details: PrivatbankDetails) => void
	onCancel: () => void
	isProcessing: boolean
}) {
	const handleSubmit = (e: Event) => {
		e.preventDefault()
		props.onSubmit(new PrivatbankDetails())
	}

	return (
		<form onSubmit={handleSubmit}>
			<div class="form-info">
				Privatbank integration configuration coming soon.
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
