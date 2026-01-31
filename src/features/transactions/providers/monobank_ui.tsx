export function MonobankEnableForm() {
	return (
		<form onsubmit={`handleEnable(event, 'monobank')`}>
			<div class="form-group">
				<label for="apiKey">API Key</label>
				<input type="text" id="apiKey" name="apiKey" placeholder="Enter your Monobank API key" required />
				<small class="form-hint">
					Get your API key from
					{' '}
					<a href="https://api.monobank.ua/index.html" target="_blank">https://api.monobank.ua/index.html</a>
				</small>
			</div>
			<div class="form-actions">
				<button type="submit" class="btn-submit">Save</button>
				<button type="button" class="btn-cancel" onclick={`hideEnableForm('monobank')`}>Cancel</button>
			</div>
		</form>
	)
}
