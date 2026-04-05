export function getStatsSheet(monthKey: string): GoogleAppsScript.Spreadsheet.Sheet | null {
	Logger.log('Attempting to get an existing stats sheet')
	const statsSheetName = `${monthKey}-stats`
	return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(statsSheetName)
}
