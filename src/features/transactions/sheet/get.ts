import type { MonthYear } from '../../../shared/month_year'

export function getTransactionsSheet(monthYear: MonthYear): GoogleAppsScript.Spreadsheet.Sheet | null {
	Logger.log('Attempting to get an existing sheet')
	return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(monthYear.format())
}
