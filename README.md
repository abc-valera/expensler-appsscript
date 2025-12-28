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

The logs can be seen in the Executions page of the Apps Script dashboard: https://script.google.com/home/executions

### Deployment explanation

TBD

## Useful links

MCC codes json list (merchant category code (MCC) is a four-digit number used to classify a business by the types of goods or services it provides): https://github.com/Oleksios/Merchant-Category-Codes

On using clasp: https://developers.google.com/apps-script/guides/clasp

On using typescript: https://developers.google.com/apps-script/guides/typescript
