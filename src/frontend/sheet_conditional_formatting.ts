/**
 * Sets up conditional formatting rules for the sheet
 */
export function setupConditionalFormatting(sheet: GoogleAppsScript.Spreadsheet.Sheet) {
	const COLORS = {
		ignore: '#eeeeee',
		income: '#ecffdc',
		expense: '#ffefea',
		blank: '#ffe0b3',

		ref: '#e3f2fd',
	}

	const lastRow = sheet.getMaxRows()
	const dataRange = sheet.getRange(2, 1, lastRow - 1, 9) // All data rows (all 9 columns)

	// Clear existing conditional format rules
	sheet.clearConditionalFormatRules()

	const rules = []

	// Rule for ref column not empty (highest priority)
	const refRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$I2<>""')
		.setBackground(COLORS.ref)
		.setRanges([dataRange])
		.build()
	rules.push(refRule)

	// Rule for 'ignore' type (Type is now in column B/2)
	const ignoreRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$B2="ignore"')
		.setBackground(COLORS.ignore)
		.setRanges([dataRange])
		.build()
	rules.push(ignoreRule)

	// Rule for 'income' type
	const incomeRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$B2="income"')
		.setBackground(COLORS.income)
		.setRanges([dataRange])
		.build()
	rules.push(incomeRule)

	// Rule for 'expense' type
	const expenseRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$B2="expense"')
		.setBackground(COLORS.expense)
		.setRanges([dataRange])
		.build()
	rules.push(expenseRule)

	// Rule for 'blank' type
	const blankRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$B2="blank"')
		.setBackground(COLORS.blank)
		.setRanges([dataRange])
		.build()
	rules.push(blankRule)

	sheet.setConditionalFormatRules(rules)
	Logger.log('Conditional formatting rules applied')
}
