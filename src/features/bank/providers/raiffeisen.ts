export class RaiffaisenDetails {
	constructor() {
		// Raiffeisen integration details coming soon
	}

	public static NewFromUnknown(_data: Record<string, unknown>): RaiffaisenDetails {
		return new RaiffaisenDetails()
	}
}
