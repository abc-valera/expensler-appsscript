import { MonthYear } from '../../../shared/month_year'

export function getTransactionsSheet(monthYear: MonthYear): GoogleAppsScript.Spreadsheet.Sheet | null {
	Logger.log('Attempting to get an existing sheet')
	return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(monthYear.toString())
}

export function getAvailableMonthYears(): MonthYear[] {
	const ss = SpreadsheetApp.getActiveSpreadsheet()
	const sheets = ss.getSheets()
	const monthYearPattern = /^\d{4}-\d{2}$/

	const monthYears: MonthYear[] = []

	sheets.forEach((sheet) => {
		const sheetName = sheet.getName()
		if (monthYearPattern.test(sheetName)) {
			try {
				const monthYear = MonthYear.fromString(sheetName)
				monthYears.push(monthYear)
			}
			catch (e) {
				Logger.log(`Error parsing sheet name ${sheetName}: ${e}`)
			}
		}
	})

	return monthYears
}
