export function AccountsSidebar() {
	const htmlContent = HtmlService.createHtmlOutputFromFile('features/accounts/view/sidebar')
		.setTitle('Account Integrations')
		.setWidth(300)

	SpreadsheetApp.getUi().showSidebar(htmlContent)
}
