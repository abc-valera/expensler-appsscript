import type { MonthYear } from '../../../shared/month_year'
import { getTransactionsSheet } from '../../transactions/sheet/get'
import { Transaction } from '../model/model'

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

export function getTransactions(monthYear: MonthYear): Transaction[] {
	const sheet = getTransactionsSheet(monthYear)
	if (!sheet) {
		Logger.log(`Transactions sheet for ${monthYear.format()} not found`)
		return []
	}

	const lastRow = sheet.getLastRow()
	if (lastRow <= 1) { // No data rows
		return []
	}

	const data = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getValues()

	return data
		.map((row, index) => {
			try {
				return parseRowIntoTransaction(row)
			}
			catch (e) {
				Logger.log(`Error parsing row ${index + 2}: ${e}`)
				return null
			}
		})
		.filter((transaction): transaction is Transaction => transaction !== null)
}
