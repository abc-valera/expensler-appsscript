export const TransactionSheetNamePattern = /^\d{4}-\d{2}$/

export function formatDateToMonthYear(date: Date): string {
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	return `${year}-${month}`
}

export function parseMonthYearString(monthYearStr: string): Date {
	const [yearStr, monthStr] = monthYearStr.split('-')
	const year = Number.parseInt(yearStr, 10)
	const month = Number.parseInt(monthStr, 10) - 1 // JavaScript Date months are 0-based
	return new Date(year, month, 1)
}
