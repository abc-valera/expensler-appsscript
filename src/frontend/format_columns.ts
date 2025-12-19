/**
 * Applies formatting to columns
 */
export function formatColumns(
	sheet: GoogleAppsScript.Spreadsheet.Sheet,
	startRow: number,
	numRows: number,
) {
	if (numRows === 0)
		return

	// Apply font to all new rows
	const allColumnsRange = sheet.getRange(startRow, 1, numRows, 7)
	allColumnsRange.setFontFamily('IBM Plex Mono')
	allColumnsRange.setFontSize(12)

	// ID column (A) - centered
	sheet.getRange(startRow, 1, numRows, 1).setHorizontalAlignment('center')

	// Time column (B) - datetime format
	sheet.getRange(startRow, 2, numRows, 1).setNumberFormat('dd.mm.yyyy hh:mm')

	// Amount column (C) - currency format, right-aligned
	const amountRange = sheet.getRange(startRow, 3, numRows, 1)
	amountRange.setNumberFormat('#,##0.00 ₴')
	amountRange.setHorizontalAlignment('right')

	// Vendor column (D) - left-aligned, wrap text
	sheet.getRange(startRow, 4, numRows, 1)
		.setWrap(true)
		.setVerticalAlignment('middle')

	// Category column (E) - centered
	sheet.getRange(startRow, 5, numRows, 1).setHorizontalAlignment('center')

	// Comment column (F) - left-aligned, wrap text
	sheet.getRange(startRow, 6, numRows, 1)
		.setWrap(true)
		.setVerticalAlignment('middle')

	// Ref column (G) - centered
	sheet.getRange(startRow, 7, numRows, 1).setHorizontalAlignment('center')
}
