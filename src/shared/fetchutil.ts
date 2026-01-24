export interface URLFetchRequest {
	url: string

	/**
	 * the content type (defaults to 'application/x-www-form-urlencoded'). Another example of content
	 * type is 'application/xml; charset=utf-8'.
	 */
	contentType?: string | undefined
	/**
	 * a JavaScript key/value map of HTTP headers for the request
	 */
	headers?: HttpHeaders | undefined
	/**
	 * the HTTP method for the request: get, delete, patch, post, or put. The default is get.
	 */
	method?: HttpMethod | undefined
	/**
	 * the payload (e.g. POST body) for the request. Certain HTTP methods (e.g. GET) do not accept a
	 * payload. It can be a string, a byte array, or a JavaScript object. A JavaScript object will be
	 * interpretted as a map of form field names to values, where the values can be either strings or blobs.
	 */
	payload?: Payload | undefined
	/**
	 * if this is set to false, the fetch will ignore any invalid certificates for HTTPS requests.
	 * The default is true.
	 */
	validateHttpsCertificates?: boolean | undefined
	/**
	 * if this is set to false, the fetch not automatically follow HTTP redirects; it will return
	 * the original HTTP response. The default is true.
	 */
	followRedirects?: boolean | undefined
	/**
	 * if this is set to true, the fetch will not throw an exception if the response code indicates
	 * failure, and will instead return the HTTPResponse (default: false)
	 */
	muteHttpExceptions?: boolean | undefined
	/**
	 * if this is set to false, reserved characters in the URL will not be escaped (default: true)
	 */
	escaping?: boolean | undefined
}

export interface HTTPResponse {
	getAllHeaders: () => object
	getContentText: (() => string) & ((charset: string) => string)
	getHeaders: () => object
	getResponseCode: () => number
}

export interface HttpHeaders {
	[key: string]: string
}

export type HttpMethod = 'get' | 'delete' | 'patch' | 'post' | 'put'

export type Payload = string | { [key: string]: any }
