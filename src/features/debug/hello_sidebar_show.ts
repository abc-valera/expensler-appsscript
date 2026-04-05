export function DebugHelloSidebar() {
	const htmlContent = HtmlService.createHtmlOutputFromFile('features/debug/hello_sidebar')
		.setTitle('Hello World')

	SpreadsheetApp.getUi().showSidebar(htmlContent)
}
