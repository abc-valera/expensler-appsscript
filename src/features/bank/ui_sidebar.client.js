function showEnableForm(provider) {
	const form = document.getElementById(`form-${provider}`)
	if (form) {
		form.style.display = 'block'
	}
}

function hideEnableForm(provider) {
	const form = document.getElementById(`form-${provider}`)
	if (form) {
		form.style.display = 'none'
	}
}

function handleEnable(event, provider) {
	event.preventDefault()
	const formData = new FormData(event.target)
	const data = Object.fromEntries(formData)

	google.script.run
		.withSuccessHandler(() => {
			google.script.run
				.withSuccessHandler(() => {
					window.location.reload()
				})
				.showSuccessMessage('Bank enabled successfully!')
		})
		.withFailureHandler((error) => {
			google.script.run.showErrorMessage(`Error enabling bank: ${error.message}`)
		})
		.enableBankIntegration(provider, data)
}
