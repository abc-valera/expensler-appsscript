import { formatDateToMonthYear } from '../../../shared/dateutil'

const categoryHeaders = ['Category', 'Total Amount', 'Transaction Count']
const vendorHeaders = ['Vendor', 'Total Amount', 'Transaction Count']
const sheetHeaders = [...categoryHeaders, '', ...vendorHeaders]
export const columnsNumber = sheetHeaders.length

export function createStatsSheet(month: Date): GoogleAppsScript.Spreadsheet.Sheet {
	const statsSheetName = `${formatDateToMonthYear(month)}-stats`
	Logger.log(`Creating new stats sheet: ${statsSheetName}`)

	const ss = SpreadsheetApp.getActiveSpreadsheet()
	const sheet = ss.insertSheet(statsSheetName)

	sheet.appendRow(sheetHeaders)

	// Set column widths
	sheet.setColumnWidth(1, 200) // Category
	sheet.setColumnWidth(2, 150) // Total Amount
	sheet.setColumnWidth(3, 150) // Transaction Count
	sheet.setColumnWidth(4, 50) // Spacer
	sheet.setColumnWidth(5, 200) // Vendor
	sheet.setColumnWidth(6, 150) // Total Amount
	sheet.setColumnWidth(7, 150) // Transaction Count

	// Format data columns (apply to entire columns for future data)
	// Category columns (A-C)
	sheet.getRange('A:A').setHorizontalAlignment('left').setFontFamily('IBM Plex Mono').setFontSize(12) // Category
	sheet.getRange('B:B').setNumberFormat('#,##0.00 ₴').setHorizontalAlignment('right').setFontFamily('IBM Plex Mono').setFontSize(12) // Amount
	sheet.getRange('C:C').setHorizontalAlignment('center').setFontFamily('IBM Plex Mono').setFontSize(12) // Count

	// Vendor columns (E-G)
	sheet.getRange('E:E').setHorizontalAlignment('left').setFontFamily('IBM Plex Mono').setFontSize(12) // Vendor
	sheet.getRange('F:F').setNumberFormat('#,##0.00 ₴').setHorizontalAlignment('right').setFontFamily('IBM Plex Mono').setFontSize(12) // Amount
	sheet.getRange('G:G').setHorizontalAlignment('center').setFontFamily('IBM Plex Mono').setFontSize(12) // Count

	// Format headers (apply after column formatting to override)
	const headerRange = sheet.getRange(1, 1, 1, columnsNumber)
	headerRange.setFontWeight('bold')
	headerRange.setBackground('#f3f3f3')
	headerRange.setHorizontalAlignment('center')
	headerRange.setFontFamily('IBM Plex Serif')
	headerRange.setFontSize(14)

	// Freeze header row
	sheet.setFrozenRows(1)

	// Protect the entire stats sheet with warning
	const protection = sheet.protect().setDescription('Stats sheet - Auto-generated data')
	protection.setWarningOnly(true)

	Logger.log(`Created new stats sheet: ${statsSheetName}`)

	return sheet
}
