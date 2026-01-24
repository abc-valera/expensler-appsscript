import { formatDateToMonthYear, parseMonthYearString, TransactionSheetNamePattern } from '../../../shared/dateutil'
import { Transaction } from '../model/model'

export function parseRowIntoTransaction(row: unknown[]): Transaction {
	if (!Array.isArray(row) || row.length < 8) {
		throw new Error('Row must have at least 8 columns (ID, AccountName, Time, Amount, Vendor, Category, Comment, Ref)')
	}

	const accountNameValue = row[1]
	if (!accountNameValue) {
		throw new Error('AccountName is missing in row and no fallback provided')
	}

	return new Transaction({
		id: String(row[0]),
		accountName: String(accountNameValue),
		time: new Date(String(row[2])),
		amount: Number(row[3]),
		vendor: String(row[4]),
		category: String(row[5]),
		comment: String(row[6]),
		ref: String(row[7]),
	})
}

export function getTransactionsForMonth(month: Date): Map<string, Transaction> {
	const sheet = getTransactionsSheet(month)
	if (!sheet) {
		Logger.log(`Transactions sheet for ${month.toISOString()} not found`)
		return new Map()
	}

	const lastRow = sheet.getLastRow()
	if (lastRow <= 1) {
		return new Map()
	}

	const data = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues()
	const transactionMap = new Map<string, Transaction>()

	data.forEach((row, index) => {
		try {
			const transaction = parseRowIntoTransaction(row)
			transactionMap.set(transaction.id, transaction)
		}
		catch (e) {
			Logger.log(`Error parsing row ${index + 2}: ${e}`)
		}
	})

	return transactionMap
}

export function getAllTransactions(): Map<string, Transaction> {
	const months = getAvailableMonths()
	const allTransactions = new Map<string, Transaction>()

	months.forEach((month) => {
		const monthTransactions = getTransactionsForMonth(month)
		monthTransactions.forEach((transaction, id) => {
			allTransactions.set(id, transaction)
		})
	})

	return allTransactions
}

export function getTransactionsSheet(month: Date): GoogleAppsScript.Spreadsheet.Sheet | null {
	Logger.log('Attempting to get an existing sheet')
	return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(formatDateToMonthYear(month))
}

export function getAvailableMonths(): Date[] {
	const ss = SpreadsheetApp.getActiveSpreadsheet()
	const sheets = ss.getSheets()

	const monthYears: Date[] = []

	sheets.forEach((sheet) => {
		const sheetName = sheet.getName()
		if (TransactionSheetNamePattern.test(sheetName)) {
			try {
				const monthYearDate = parseMonthYearString(sheetName)
				monthYears.push(monthYearDate)
			}
			catch (e) {
				Logger.log(`Error parsing sheet name ${sheetName}: ${e}`)
			}
		}
	})

	return monthYears
}
