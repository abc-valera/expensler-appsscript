export function showAccounts() {
	const htmlOutput = HtmlService.createHtmlOutputFromFile('features/accounts/sidebar')
		.setTitle('Accounts')
		.setWidth(300)

	SpreadsheetApp.getUi().showSidebar(htmlOutput)
}
