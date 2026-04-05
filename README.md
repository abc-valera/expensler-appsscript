# Expensler💸 Apps Script

[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

_IN PROGRESS_

## About

Expensler is an apps-script google sheets addon for tracking personal finance.

## Development

First, make a local copy of the example.env file and populate it with API keys:

```bash
cp env/example.env env/.env
```

Then, install dependencies, authenticate with Google, build and deploy the script:

```bash
npm i
npm run authenticate
npm run deploy
```

### Notes

To remove all document properties:

```javascript
function deleteAllDocumentProperties() {
	PropertiesService.getDocumentProperties().deleteAllProperties()
	Logger.log('All document properties deleted.')
}
```

The logs can be seen in the Executions page of the Apps Script dashboard: https://script.google.com/home/executions

### Deployment explanation

TBD

## On js/ts

To create a new Node.js project run `npm init -y`.
