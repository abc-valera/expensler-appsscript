const DASHBOARD_SHEET_NAME = 'Dashboard'

export function createOrUpdateDashboardSheet(): void {
	const ss = SpreadsheetApp.getActiveSpreadsheet()

	let sheet = ss.getSheetByName(DASHBOARD_SHEET_NAME)
	if (!sheet) {
		sheet = ss.insertSheet(DASHBOARD_SHEET_NAME, 0)
		Logger.log('Created new Dashboard sheet')
	}

	sheet.clearContents()
	sheet.clearFormats()

	const version = getAppVersion()

	// --- Layout ---
	// Row 1: App title banner
	// Row 3: Tagline
	// Row 5: Version label + value

	sheet.setColumnWidth(1, 60)
	sheet.setColumnWidth(2, 280)
	sheet.setColumnWidth(3, 280)
	sheet.setColumnWidth(4, 60)

	// Title: "Expensler 💸"
	const titleRange = sheet.getRange('B1:C1')
	titleRange.merge()
	titleRange.setValue('Expensler 💸')
	titleRange
		.setFontFamily('IBM Plex Serif')
		.setFontSize(36)
		.setFontWeight('bold')
		.setFontColor('#1a1a2e')
		.setHorizontalAlignment('center')
		.setVerticalAlignment('middle')
	sheet.setRowHeight(1, 80)

	// Tagline
	const taglineRange = sheet.getRange('B2:C2')
	taglineRange.merge()
	taglineRange.setValue('Your personal finance tracker for Google Sheets')
	taglineRange
		.setFontFamily('IBM Plex Mono')
		.setFontSize(13)
		.setFontColor('#555577')
		.setHorizontalAlignment('center')
		.setVerticalAlignment('middle')
	sheet.setRowHeight(2, 36)

	// Spacer row
	sheet.setRowHeight(3, 20)

	// Version row
	const versionLabelRange = sheet.getRange('B4')
	versionLabelRange.setValue('Version')
	versionLabelRange
		.setFontFamily('IBM Plex Mono')
		.setFontSize(13)
		.setFontWeight('bold')
		.setFontColor('#333355')
		.setHorizontalAlignment('right')
		.setVerticalAlignment('middle')

	const versionValueRange = sheet.getRange('C4')
	versionValueRange.setValue(version)
	versionValueRange
		.setFontFamily('IBM Plex Mono')
		.setFontSize(13)
		.setFontColor('#1a6b3c')
		.setHorizontalAlignment('left')
		.setVerticalAlignment('middle')
	sheet.setRowHeight(4, 32)

	// Background for banner area
	sheet.getRange('A1:D4').setBackground('#f0f4ff')
	sheet.getRange('B4:C4').setBackground('#e0f7ec')

	// Protect the sheet (read-only warning)
	const protection = sheet.protect().setDescription('Dashboard - auto-generated')
	protection.setWarningOnly(true)

	// Move Dashboard to first position
	ss.setActiveSheet(sheet)
	ss.moveActiveSheet(1)

	Logger.log('Dashboard sheet updated successfully')
}

function getAppVersion(): string {
	return typeof EXPENSLER_TAG_VERSION !== 'undefined' ? EXPENSLER_TAG_VERSION : EXPENSLER_COMMIT_VERSION
}
