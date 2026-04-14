import { sortSheetsAlphabetically } from '../../../shared/dateutil'
import {
	getCategoryColIndex,
	getTotalColIndex,
	getVendorColIndex,
	sheetHeaders,
	totalSheetColumnsNumber,
	vendorColOffset,
} from './sheet_dto'

function colLetter(colIndex: number): string {
	return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[colIndex - 1]
}

function entireCol(colIndex: number): string {
	const letter = colLetter(colIndex)
	return `${letter}:${letter}`
}

export function createStatsSheet(month: string): GoogleAppsScript.Spreadsheet.Sheet {
	const statsSheetName = `${month}-stats`
	Logger.log(`Creating new stats sheet: ${statsSheetName}`)

	const ss = SpreadsheetApp.getActiveSpreadsheet()
	const sheet = ss.insertSheet(statsSheetName)

	sheet.appendRow(sheetHeaders)

	// Set column widths
	sheet.setColumnWidth(getCategoryColIndex('category'), 250)
	sheet.setColumnWidth(getCategoryColIndex('totalAmount'), 150)
	sheet.setColumnWidth(getCategoryColIndex('transactionCount'), 75)
	sheet.setColumnWidth(vendorColOffset - 1, 50) // Spacer column (D)
	sheet.setColumnWidth(getVendorColIndex('vendor'), 250)
	sheet.setColumnWidth(getVendorColIndex('totalAmount'), 150)
	sheet.setColumnWidth(getVendorColIndex('transactionCount'), 75)
	sheet.setColumnWidth(getTotalColIndex('totalSpent') - 1, 50) // Spacer column (H)
	sheet.setColumnWidth(getTotalColIndex('totalSpent'), 150)

	// Format category columns
	sheet.getRange(entireCol(getCategoryColIndex('category')))
		.setHorizontalAlignment('left')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)
	sheet.getRange(entireCol(getCategoryColIndex('totalAmount')))
		.setNumberFormat('#,##0.00 ₴')
		.setHorizontalAlignment('right')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)
	sheet.getRange(entireCol(getCategoryColIndex('transactionCount')))
		.setHorizontalAlignment('center')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)

	// Format vendor columns
	sheet.getRange(entireCol(getVendorColIndex('vendor')))
		.setHorizontalAlignment('left')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)
	sheet.getRange(entireCol(getVendorColIndex('totalAmount')))
		.setNumberFormat('#,##0.00 ₴')
		.setHorizontalAlignment('right')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)
	sheet.getRange(entireCol(getVendorColIndex('transactionCount')))
		.setHorizontalAlignment('center')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)

	// Format total column
	sheet.getRange(entireCol(getTotalColIndex('totalSpent')))
		.setNumberFormat('#,##0.00 ₴')
		.setHorizontalAlignment('right')
		.setFontFamily('IBM Plex Mono')
		.setFontSize(12)

	// Format headers (apply after column formatting to override)
	const headerRange = sheet.getRange(1, 1, 1, totalSheetColumnsNumber)
	headerRange.setFontWeight('bold')
	headerRange.setBackground('#f3f3f3')
	headerRange.setHorizontalAlignment('center')
	headerRange.setFontFamily('IBM Plex Serif')
	headerRange.setFontSize(14)

	// Freeze header row
	sheet.setFrozenRows(1)

	// Protect the entire stats sheet with warning
	const protection = sheet.protect().setDescription('Stats sheet - Auto-generated data')
	protection.setWarningOnly(true)

	sortSheetsAlphabetically()
	Logger.log(`Created new stats sheet: ${statsSheetName}`)

	return sheet
}

export function addCategoryPieChart(sheet: GoogleAppsScript.Spreadsheet.Sheet, rowCount: number) {
	// Remove all existing charts — both pie charts are always recreated together
	sheet.getCharts().forEach(chart => sheet.removeChart(chart))

	if (rowCount === 0) {
		return
	}

	// Single contiguous range: category (col A) + totalAmount (col B)
	const dataRange = sheet.getRange(2, getCategoryColIndex('category'), rowCount, 2)

	const chart = sheet.newChart()
		.setChartType(Charts.ChartType.PIE)
		.addRange(dataRange)
		.setOption('title', 'Spendings per Category')
		.setPosition(2, getTotalColIndex('totalSpent') + 2, 0, 0)
		.setNumHeaders(0)
		.build()

	sheet.insertChart(chart)
}

export function addVendorPieChart(sheet: GoogleAppsScript.Spreadsheet.Sheet, rowCount: number) {
	// Category chart removal is handled by addCategoryPieChart, nothing to remove here

	if (rowCount === 0) {
		return
	}

	// Single contiguous range: vendor (col E) + totalAmount (col F)
	const dataRange = sheet.getRange(2, getVendorColIndex('vendor'), rowCount, 2)

	const chart = sheet.newChart()
		.setChartType(Charts.ChartType.PIE)
		.addRange(dataRange)
		.setOption('title', 'Spendings per Vendor')
		.setPosition(20, getTotalColIndex('totalSpent') + 2, 0, 0)
		.setNumHeaders(0)
		.build()

	sheet.insertChart(chart)
}
