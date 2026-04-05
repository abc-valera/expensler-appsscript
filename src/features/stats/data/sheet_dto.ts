import type { CategoryAggregation } from '../model/category_aggregation'
import type { TotalAggregation } from '../model/total_aggregation'
import type { VendorAggregation } from '../model/vendor_aggregation'

export const categoryColNames = {
	category: 'Category',
	totalAmount: 'Total Amount',
	transactionCount: 'Transaction Count',
} as const satisfies Record<keyof CategoryAggregation, string>

export const vendorColNames = {
	vendor: 'Vendor',
	totalAmount: 'Total Amount',
	transactionCount: 'Transaction Count',
} as const satisfies Record<keyof VendorAggregation, string>

export const totalColNames = {
	totalSpent: 'Total Spent',
} as const satisfies Record<keyof TotalAggregation, string>

// Category section starts at column 1 (A)
export const categoryColOffset = 1
// Vendor section starts at column 5 (E), with column 4 (D) as spacer
export const vendorColOffset = 5
// Total section starts at column 9 (I), with column 8 (H) as spacer
export const totalColOffset = 9

export function getCategoryColIndex(field: keyof CategoryAggregation): number {
	return Object.keys(categoryColNames).indexOf(field) + categoryColOffset
}

export function getVendorColIndex(field: keyof VendorAggregation): number {
	return Object.keys(vendorColNames).indexOf(field) + vendorColOffset
}

export function getTotalColIndex(field: keyof TotalAggregation): number {
	return Object.keys(totalColNames).indexOf(field) + totalColOffset
}

export const categoryColumnsNumber = Object.keys(categoryColNames).length
export const vendorColumnsNumber = Object.keys(vendorColNames).length
export const totalColumnsNumber = Object.keys(totalColNames).length

// Total header row: category cols + spacer + vendor cols + spacer + total cols
export const sheetHeaders = [
	...Object.values(categoryColNames),
	'',
	...Object.values(vendorColNames),
	'',
	...Object.values(totalColNames),
]
export const totalSheetColumnsNumber = sheetHeaders.length
