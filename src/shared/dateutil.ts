export const sheetNamePattern: RegExp = /^\d{4}-\d{2}$/

export function dateToSheetName(date: Date): string {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

export function sheetNameToDate(key: string): Date {
	const [year, month] = key.split('-').map(Number)
	return new Date(year, month - 1, 1)
}

export function sortSheetsAlphabetically(): void {
	const ss = SpreadsheetApp.getActiveSpreadsheet()
	const sheets = ss.getSheets()
	sheets
		.map(s => s.getName())
		.sort()
		.reverse()
		.forEach((name, i) => {
			ss.setActiveSheet(ss.getSheetByName(name)!)
			ss.moveActiveSheet(i + 1)
		})
	ss.setActiveSheet(ss.getSheets()[0])
}
