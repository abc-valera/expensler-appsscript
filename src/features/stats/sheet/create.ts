import type { MonthYear } from '../../../shared/month_year'

const categoryHeaders = ['Category', 'Total Amount', 'Transaction Count']
const vendorHeaders = ['Vendor', 'Total Amount', 'Transaction Count']
const sheetHeaders = [...categoryHeaders, '', ...vendorHeaders]
export const columnsNumber = sheetHeaders.length

export function createStatsSheet(monthYear: MonthYear): GoogleAppsScript.Spreadsheet.Sheet {
	Logger.log(`Creating new stats sheet: ${monthYear.format()}-stats`)

	const ss = SpreadsheetApp.getActiveSpreadsheet()
	const statsSheetName = `${monthYear.format()}-stats`
	const sheet = ss.insertSheet(statsSheetName)

	sheet.appendRow(sheetHeaders)

	// Format headers
	const headerRange = sheet.getRange(1, 1, 1, columnsNumber)
	headerRange.setFontWeight('bold')
	headerRange.setBackground('#f3f3f3')
	headerRange.setHorizontalAlignment('center')
	headerRange.setFontFamily('IBM Plex Serif')
	headerRange.setFontSize(14)

	// Set column widths
	sheet.setColumnWidth(1, 200) // Category
	sheet.setColumnWidth(2, 150) // Total Amount
	sheet.setColumnWidth(3, 150) // Transaction Count
	sheet.setColumnWidth(4, 50) // Spacer
	sheet.setColumnWidth(5, 200) // Vendor
	sheet.setColumnWidth(6, 150) // Total Amount
	sheet.setColumnWidth(7, 150) // Transaction Count

	// Freeze header row
	sheet.setFrozenRows(1)

	Logger.log(`Created new stats sheet: ${statsSheetName}`)

	return sheet
}
