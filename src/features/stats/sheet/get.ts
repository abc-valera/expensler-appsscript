import type { MonthYear } from '../../../shared/month_year'

export function getStatsSheet(monthYear: MonthYear): GoogleAppsScript.Spreadsheet.Sheet | null {
	Logger.log('Attempting to get an existing stats sheet')
	const statsSheetName = `${monthYear.toString()}-stats`
	return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(statsSheetName)
}
