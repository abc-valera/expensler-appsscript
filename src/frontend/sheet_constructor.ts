import { setupConditionalFormatting } from './sheet_conditional_formatting'

/**
 * Creates or gets the sheet for the current month.
 * Uses year-month naming (e.g. "2025-10").
 */
export function getTargetSheet(): GoogleAppsScript.Spreadsheet.Sheet {
	const ss = SpreadsheetApp.getActiveSpreadsheet()
	const sheetName = (() => {
		const now = new Date()
		const year = now.getFullYear()
		const month = String(now.getMonth() + 1).padStart(2, '0')
		return `${year}-${month}` // e.g., "2025-10"
	})()

	let sheet = ss.getSheetByName(sheetName)

	if (!sheet) {
		sheet = ss.insertSheet(sheetName)

		const headers = [
			'ID',
			'Time',
			'Amount',
			'Vendor',
			'Category',
			'Comment',
			'Ref',
		]
		sheet.appendRow(headers)

		// Format headers
		const headerRange = sheet.getRange(1, 1, 1, headers.length)
		headerRange.setFontWeight('bold')
		headerRange.setBackground('#f3f3f3')
		headerRange.setHorizontalAlignment('center')
		headerRange.setFontFamily('IBM Plex Serif')
		headerRange.setFontSize(14) // Set header font size

		// Set column widths
		sheet.setColumnWidth(1, 150) // ID
		sheet.setColumnWidth(2, 140) // Time
		sheet.setColumnWidth(3, 120) // Amount
		sheet.setColumnWidth(4, 300) // Vendor
		sheet.setColumnWidth(5, 140) // Category
		sheet.setColumnWidth(6, 200) // Comment
		sheet.setColumnWidth(7, 150) // Ref

		// Freeze header row
		sheet.setFrozenRows(1)

		// Apply conditional formatting
		setupConditionalFormatting(sheet)

		Logger.log(`Created new sheet: ${sheetName}`)
	}

	return sheet
}
