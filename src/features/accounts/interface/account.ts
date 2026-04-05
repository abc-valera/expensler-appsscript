import type { HTTPResponse, URLFetchRequest } from '../../../shared/fetchutil'
import type { Transaction } from '../../transactions/model/model'

export interface Account {
	name: string
	bankName: string
	addedAt: Date

	newGetTransactionsRequest: (from: Date, to: Date) => URLFetchRequest
	processGetTransactionsResponse: (response: HTTPResponse) => Map<string, Transaction[]>

	// TODO: track the state of the account somehow
	// e.g. if the account was removed and is no more valid then the user should know about it
	// This should be done on creation and on further requests too.
	// isValid: boolean

	// TODO: add different currencies support
}
