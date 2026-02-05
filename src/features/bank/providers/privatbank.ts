export class PrivatbankDetails {
	constructor() {
		// Privatbank integration details coming soon
	}

	public static NewFromUnknown(_data: Record<string, unknown>): PrivatbankDetails {
		return new PrivatbankDetails()
	}
}
