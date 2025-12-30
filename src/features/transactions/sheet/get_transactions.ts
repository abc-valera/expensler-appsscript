import type { MonthYear } from '../../../shared/month_year'
import { Transaction } from '../model/model'
import { getAvailableMonthYears, getTransactionsSheet } from './get'

export function parseRowIntoTransaction(row: unknown[]): Transaction {
	if (!Array.isArray(row) || row.length < 7) {
		throw new Error('Row must have at least 7 columns (ID, Time, Amount, Vendor, Category, Comment, Ref)')
	}

	return new Transaction({
		id: String(row[0]),
		time: new Date(String(row[1])),
		amount: Number(row[2]),
		vendor: String(row[3]),
		category: String(row[4]),
		comment: String(row[5]),
		ref: String(row[6]),
	})
}

export function getTransactionsForMonthYear(monthYear: MonthYear): Map<string, Transaction> {
	const sheet = getTransactionsSheet(monthYear)
	if (!sheet) {
		Logger.log(`Transactions sheet for ${monthYear.toString()} not found`)
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
	const monthYears = getAvailableMonthYears()
	const allTransactions = new Map<string, Transaction>()

	monthYears.forEach((monthYear) => {
		const monthTransactions = getTransactionsForMonthYear(monthYear)
		monthTransactions.forEach((transaction, id) => {
			allTransactions.set(id, transaction)
		})
	})

	return allTransactions
}
