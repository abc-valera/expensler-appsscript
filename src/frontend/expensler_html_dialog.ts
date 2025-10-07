// Use HTML dialogs instead of built-in alerts to avoid the stuck "Working..." spinner in Sheets.
export function showHtmlDialog({ message, type = 'info' }: { message: string, type?: 'info' | 'error' }) {
	const colors = type === 'error'
		? { border: '#d93025', background: '#fce8e6' }
		: { border: '#1a73e8', background: '#e8f0fe' }

	const html = HtmlService.createHtmlOutput(`
<div style="font-family: Arial, sans-serif; padding: 16px; border-left: 4px solid ${colors.border}; background: ${colors.background}; color: #202124;">
  <div style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">${escapeHtml(message)}</div>
  <button onclick="google.script.host.close()" style="padding: 6px 12px; background: ${colors.border}; color: #fff; border: none; border-radius: 4px; cursor: pointer;">OK</button>
</div>
`)
		.setWidth(360)
		.setHeight(140)

	SpreadsheetApp.getUi().showModalDialog(html, 'Expensler💸')
}

function escapeHtml(input: string) {
	return input
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
}
