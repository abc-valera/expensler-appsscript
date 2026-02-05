export class MonobankDetails {
	public readonly apiKey: string

	constructor(input: { apiKey: string }) {
		if (!input.apiKey) {
			throw new Error('Monobank API key is missing')
		}

		this.apiKey = input.apiKey
	}

	public static NewFromUnknown(data: Record<string, unknown>): MonobankDetails {
		const apiKey = data.apiKey
		if (typeof apiKey !== 'string') {
			throw new TypeError('Monobank API key is missing or not a string')
		}

		return new MonobankDetails({ apiKey })
	}
}
