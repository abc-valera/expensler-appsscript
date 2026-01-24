import { formatDateToMonthYear } from '../../../shared/dateutil'

export function getStatsSheet(month: Date): GoogleAppsScript.Spreadsheet.Sheet | null {
	Logger.log('Attempting to get an existing stats sheet')
	const statsSheetName = `${formatDateToMonthYear(month)}-stats`
	return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(statsSheetName)
}
