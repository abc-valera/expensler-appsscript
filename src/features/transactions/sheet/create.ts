import { formatDateToMonthYear } from '../../../shared/dateutil'

const sheetHeaders = [
	'ID',
	'AccountName',
	'Time',
	'Amount',
	'Vendor',
	'Category',
	'Comment',
	'Ref',
]
export const columnsNumber = sheetHeaders.length

const colors = {
	ref: '#e3f2fd',
	actionNeeded: '#ffe0b3',
	ignore: '#eeeeee',
	income: '#ecffdc',
	expense: '#ffefea',
}

export function createTransactionsSheet(month: Date): GoogleAppsScript.Spreadsheet.Sheet {
	Logger.log(`Creating new sheet: ${formatDateToMonthYear(month)}`)

	const ss = SpreadsheetApp.getActiveSpreadsheet()
	const sheet = ss.insertSheet(formatDateToMonthYear(month))

	sheet.appendRow(sheetHeaders)

	// Set column widths
	sheet.setColumnWidth(1, 150) // ID
	sheet.setColumnWidth(2, 200) // AccountName
	sheet.setColumnWidth(3, 140) // Time
	sheet.setColumnWidth(4, 120) // Amount
	sheet.setColumnWidth(5, 300) // Vendor
	sheet.setColumnWidth(6, 140) // Category
	sheet.setColumnWidth(7, 200) // Comment
	sheet.setColumnWidth(8, 150) // Ref

	// Format data columns (apply to entire columns for future data)
	// ID column (A) - centered
	sheet.getRange('A:A').setHorizontalAlignment('center').setFontFamily('IBM Plex Mono').setFontSize(12)

	// AccountName column (B) - centered
	sheet.getRange('B:B').setHorizontalAlignment('center').setFontFamily('IBM Plex Mono').setFontSize(12)

	// Time column (C) - datetime format
	sheet.getRange('C:C').setNumberFormat('dd.mm.yyyy hh:mm').setFontFamily('IBM Plex Mono').setFontSize(12)

	// Amount column (D) - currency format, right-aligned
	sheet.getRange('D:D').setNumberFormat('#,##0.00 ₴').setHorizontalAlignment('right').setFontFamily('IBM Plex Mono').setFontSize(12)

	// Vendor column (E) - left-aligned, wrap text
	sheet.getRange('E:E').setWrap(true).setVerticalAlignment('middle').setFontFamily('IBM Plex Mono').setFontSize(12)

	// Category column (F) - centered
	sheet.getRange('F:F').setHorizontalAlignment('center').setFontFamily('IBM Plex Mono').setFontSize(12)

	// Comment column (G) - left-aligned, wrap text
	sheet.getRange('G:G').setWrap(true).setVerticalAlignment('middle').setFontFamily('IBM Plex Mono').setFontSize(12)

	// Ref column (H) - centered
	sheet.getRange('H:H').setHorizontalAlignment('center').setFontFamily('IBM Plex Mono').setFontSize(12)

	// Format headers (apply after column formatting to override)
	const headerRange = sheet.getRange(1, 1, 1, columnsNumber)
	headerRange.setFontWeight('bold')
	headerRange.setBackground('#f3f3f3')
	headerRange.setHorizontalAlignment('center')
	headerRange.setFontFamily('IBM Plex Serif')
	headerRange.setFontSize(14) // Set header font size

	// Freeze header row
	sheet.setFrozenRows(1)

	const lastRow = sheet.getMaxRows()
	const dataRange = sheet.getRange(2, 1, lastRow - 1, columnsNumber) // All data rows (all columns)
	const rules = []

	// Rule for ref column not empty (highest priority)
	const refRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$H2<>""')
		.setBackground(colors.ref)
		.setRanges([dataRange])
		.build()
	rules.push(refRule)

	// Rule for 'Money Transfer' category
	const moneyTransferRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$F2="Money Transfer"')
		.setBackground(colors.actionNeeded)
		.setRanges([dataRange])
		.build()
	rules.push(moneyTransferRule)

	// Rule for 'Ignore' category
	const ignoreRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$F2="Ignore"')
		.setBackground(colors.ignore)
		.setRanges([dataRange])
		.build()
	rules.push(ignoreRule)

	// Rule for amount > 0 (income)
	const incomeRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$D2>0')
		.setBackground(colors.income)
		.setRanges([dataRange])
		.build()
	rules.push(incomeRule)

	// Rule for amount < 0 (expense)
	const expenseRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$D2<0')
		.setBackground(colors.expense)
		.setRanges([dataRange])
		.build()
	rules.push(expenseRule)

	// Clear existing conditional format rules and set new ones
	sheet.clearConditionalFormatRules()
	sheet.setConditionalFormatRules(rules)

	// Protect ID, Time, and Amount columns with warning
	const columnsToProtect = [
		{ column: 'A:A', name: 'ID' },
		{ column: 'B:B', name: 'AccountName' },
		{ column: 'C:C', name: 'Time' },
		{ column: 'D:D', name: 'Amount' },
	]
	columnsToProtect.forEach(({ column, name }) => {
		const range = sheet.getRange(column)
		const protection = range.protect().setDescription(`${name} column - Not for manual editing`)
		protection.setWarningOnly(true)
	})

	Logger.log(`Created new sheet: ${formatDateToMonthYear(month)}`)

	return sheet
}
