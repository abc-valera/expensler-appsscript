import type { Transaction } from '../model/model'

// defines column names
export const colNames = {
	id: 'ID',
	accountName: 'Account Name',
	time: 'Time',
	amount: 'Amount',
	vendor: 'Vendor',
	category: 'Category',
	comment: 'Comment',
	ref: 'Ref',
} as const satisfies Record<keyof Transaction, string>

// maps transaction fields to column indexes (1-based)
export function getColIndex(field: keyof Transaction): number {
	return Object.keys(colNames).indexOf(field) + 1
}

// maps transaction fields to letters ('A', 'B', etc.)
export function getColLetter(field: keyof Transaction): string {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const index = getColIndex(field) - 1
	return letters[index]
}

// maps transaction fields to entire column letters (e.g. 'A:A')
export function getEntireColLetter(field: keyof Transaction): string {
	const letter = getColLetter(field)
	return `${letter}:${letter}`
}

export const columnsNumber = Object.keys(colNames).length
