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
	const allColumnsRange = sheet.getRange(startRow, 1, numRows, 9)
	allColumnsRange.setFontFamily('IBM Plex Mono')
	allColumnsRange.setFontSize(12)

	// ID column (A) - centered
	sheet.getRange(startRow, 1, numRows, 1).setHorizontalAlignment('center')

	// Type column (B) - centered, bold
	const typeRange = sheet.getRange(startRow, 2, numRows, 1)
	typeRange.setHorizontalAlignment('center')
	typeRange.setFontWeight('bold')

	// Amount column (C) - currency format, right-aligned
	const amountRange = sheet.getRange(startRow, 3, numRows, 1)
	amountRange.setNumberFormat('#,##0.00 ₴')
	amountRange.setHorizontalAlignment('right')

	// Time column (D) - datetime format
	sheet.getRange(startRow, 4, numRows, 1).setNumberFormat('dd.mm.yyyy hh:mm')

	// Vendor column (E) - left-aligned, wrap text
	sheet
		.getRange(startRow, 5, numRows, 1)
		.setWrap(true)
		.setVerticalAlignment('middle')

	// Comment column (F) - left-aligned, wrap text
	sheet
		.getRange(startRow, 6, numRows, 1)
		.setWrap(true)
		.setVerticalAlignment('middle')

	// MCC column (G) - centered
	sheet.getRange(startRow, 7, numRows, 1).setHorizontalAlignment('center')

	// Short Description column (H) - left-aligned, wrap text
	sheet
		.getRange(startRow, 8, numRows, 1)
		.setWrap(true)
		.setVerticalAlignment('middle')

	// Ref column (I) - centered
	sheet.getRange(startRow, 9, numRows, 1).setHorizontalAlignment('center')
}
