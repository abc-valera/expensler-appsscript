import type { MonthYear } from '../../../shared/month_year'

const sheetHeaders = [
	'ID',
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

export function createTransactionsSheet(monthYear: MonthYear): GoogleAppsScript.Spreadsheet.Sheet {
	Logger.log(`Creating new sheet: ${monthYear.format()}`)

	const ss = SpreadsheetApp.getActiveSpreadsheet()
	const sheet = ss.insertSheet(monthYear.format())

	sheet.appendRow(sheetHeaders)

	// Format headers
	const headerRange = sheet.getRange(1, 1, 1, columnsNumber)
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

	const lastRow = sheet.getMaxRows()
	const dataRange = sheet.getRange(2, 1, lastRow - 1, columnsNumber) // All data rows (all columns)
	const rules = []

	// Rule for ref column not empty (highest priority)
	const refRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$G2<>""')
		.setBackground(colors.ref)
		.setRanges([dataRange])
		.build()
	rules.push(refRule)

	// Rule for 'Money Transfer' category
	const moneyTransferRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$E2="Money Transfer"')
		.setBackground(colors.actionNeeded)
		.setRanges([dataRange])
		.build()
	rules.push(moneyTransferRule)

	// Rule for 'Ignore' category
	const ignoreRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$E2="Ignore"')
		.setBackground(colors.ignore)
		.setRanges([dataRange])
		.build()
	rules.push(ignoreRule)

	// Rule for amount > 0 (income)
	const incomeRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$C2>0')
		.setBackground(colors.income)
		.setRanges([dataRange])
		.build()
	rules.push(incomeRule)

	// Rule for amount < 0 (expense)
	const expenseRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$C2<0')
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
		{ column: 'B:B', name: 'Time' },
		{ column: 'C:C', name: 'Amount' },
	]
	columnsToProtect.forEach(({ column, name }) => {
		const range = sheet.getRange(column)
		const protection = range.protect().setDescription(`${name} column - Not for manual editing`)
		protection.setWarningOnly(true)
	})

	Logger.log(`Created new sheet: ${monthYear.format()}`)

	return sheet
}
