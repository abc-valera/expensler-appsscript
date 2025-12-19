/**
 * Sets up conditional formatting rules for the sheet
 */
export function setupConditionalFormatting(sheet: GoogleAppsScript.Spreadsheet.Sheet) {
	const COLORS = {
		ref: '#e3f2fd',
		actionNeeded: '#ffe0b3',
		ignore: '#eeeeee',
		income: '#ecffdc',
		expense: '#ffefea',
	}

	const lastRow = sheet.getMaxRows()
	const dataRange = sheet.getRange(2, 1, lastRow - 1, 7) // All data rows (all 7 columns)

	// Clear existing conditional format rules
	sheet.clearConditionalFormatRules()

	const rules = []

	// Rule for ref column not empty (highest priority)
	const refRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$G2<>""')
		.setBackground(COLORS.ref)
		.setRanges([dataRange])
		.build()
	rules.push(refRule)

	// Rule for 'Money Transfer' category
	const moneyTransferRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$E2="Money Transfer"')
		.setBackground(COLORS.actionNeeded)
		.setRanges([dataRange])
		.build()
	rules.push(moneyTransferRule)

	// Rule for 'Ignore' category
	const ignoreRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$E2="Ignore"')
		.setBackground(COLORS.ignore)
		.setRanges([dataRange])
		.build()
	rules.push(ignoreRule)

	// Rule for amount > 0 (income)
	const incomeRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$C2>0')
		.setBackground(COLORS.income)
		.setRanges([dataRange])
		.build()
	rules.push(incomeRule)

	// Rule for amount < 0 (expense)
	const expenseRule = SpreadsheetApp.newConditionalFormatRule()
		.whenFormulaSatisfied('=$C2<0')
		.setBackground(COLORS.expense)
		.setRanges([dataRange])
		.build()
	rules.push(expenseRule)

	sheet.setConditionalFormatRules(rules)
	Logger.log('Conditional formatting rules applied')
}
