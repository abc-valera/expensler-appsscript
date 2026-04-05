import { sortSheetsAlphabetically } from '../../../shared/dateutil'
import { colNames, columnsNumber, getColIndex, getColLetter, getEntireColLetter } from './sheet_dto'

const colors = {
	ref: '#e3f2fd',
	actionNeeded: '#ffe0b3',
	ignore: '#eeeeee',
	income: '#ecffdc',
	expense: '#ffefea',
}

export function createTransactionsSheet(monthYear: string): GoogleAppsScript.Spreadsheet.Sheet {
	Logger.log(`Creating new sheet: ${monthYear}`)

	const ss = SpreadsheetApp.getActiveSpreadsheet()
	const sheet = ss.insertSheet(monthYear)

	sheet.appendRow(Object.values(colNames))

	// Set column widths
	sheet.setColumnWidth(getColIndex('id'), 150)
	sheet.setColumnWidth(getColIndex('accountName'), 200)
	sheet.setColumnWidth(getColIndex('time'), 140)
	sheet.setColumnWidth(getColIndex('amount'), 120)
	sheet.setColumnWidth(getColIndex('vendor'), 200)
	sheet.setColumnWidth(getColIndex('category'), 300)
	sheet.setColumnWidth(getColIndex('comment'), 140)
	sheet.setColumnWidth(getColIndex('ref'), 150)

	// Format data columns (apply to entire columns for future data)

	sheet.getRange(getEntireColLetter('id'))
		.setHorizontalAlignment('center')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)
	sheet.getRange('B:B')
		.setHorizontalAlignment('center')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)
	sheet.getRange(getEntireColLetter('time'))
		.setNumberFormat('dd.mm.yyyy hh:mm')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)
	sheet.getRange(getEntireColLetter('amount'))
		.setNumberFormat('#,##0.00 ₴')
		.setHorizontalAlignment('right')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)
	sheet.getRange(getEntireColLetter('vendor'))
		.setHorizontalAlignment('center')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)
	sheet.getRange(getEntireColLetter('category'))
		.setHorizontalAlignment('center')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)
	sheet.getRange(getEntireColLetter('comment'))
		.setWrap(true)
		.setVerticalAlignment('middle')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)
	sheet.getRange(getEntireColLetter('ref'))
		.setHorizontalAlignment('center')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)

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
		.whenFormulaSatisfied(`=$${getColLetter('ref')}2<>""`)
		.setBackground(colors.ref)
		.setRanges([dataRange])
		.build()
	rules.push(refRule)

	// Rule for 'Money Transfer' category
	const moneyTransferRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied(`=$${getColLetter('category')}2="Money Transfer"`)
		.setBackground(colors.actionNeeded)
		.setRanges([dataRange])
		.build()
	rules.push(moneyTransferRule)

	// Rule for 'Ignore' category
	const ignoreRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied(`=$${getColLetter('category')}2="Ignore"`)
		.setBackground(colors.ignore)
		.setRanges([dataRange])
		.build()
	rules.push(ignoreRule)

	// Rule for amount > 0 (income)
	const incomeRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied(`=$${getColLetter('amount')}2>0`)
		.setBackground(colors.income)
		.setRanges([dataRange])
		.build()
	rules.push(incomeRule)

	// Rule for amount < 0 (expense)
	const expenseRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied(`=$${getColLetter('amount')}2<0`)
		.setBackground(colors.expense)
		.setRanges([dataRange])
		.build()
	rules.push(expenseRule)

	// Clear existing conditional format rules and set new ones
	sheet.clearConditionalFormatRules()
	sheet.setConditionalFormatRules(rules)

	// Protect ID, Time, and Amount columns with warning
	const columnsToProtect = [
		{ column: getEntireColLetter('id'), name: 'ID' },
		{ column: getEntireColLetter('accountName'), name: 'AccountName' },
		{ column: getEntireColLetter('time'), name: 'Time' },
		{ column: getEntireColLetter('amount'), name: 'Amount' },
	]
	columnsToProtect.forEach(({ column, name }) => {
		const range = sheet.getRange(column)
		const protection = range.protect().setDescription(`${name} column - Not for manual editing`)
		protection.setWarningOnly(true)
	})

	sortSheetsAlphabetically()
	Logger.log(`Created new sheet: ${monthYear}`)

	return sheet
}

