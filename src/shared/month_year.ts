export class MonthYear {
	year: number
	month: number

	constructor(year: number, month: number) {
		this.year = year
		this.month = month
	}

	static fromString(dateStr: string): MonthYear {
		const [yearStr, monthStr] = dateStr.split('-')
		const year = Number.parseInt(yearStr, 10)
		const month = Number.parseInt(monthStr, 10)
		return new MonthYear(year, month)
	}

	toString(): string {
		const monthStr = String(this.month).padStart(2, '0')
		return `${this.year}-${monthStr}`
	}
}

export function newCurrentMonthYear(): MonthYear {
	const now = new Date()
	return new MonthYear(now.getFullYear(), now.getMonth() + 1)
}
