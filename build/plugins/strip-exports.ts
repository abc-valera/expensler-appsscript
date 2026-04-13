import type { Plugin } from 'esbuild'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

// stripExports removes all export statements from the final build output as required by Google Apps Script
export function stripExports(): Plugin {
	return {
		name: 'strip-exports',
		setup(build) {
			build.onEnd(async () => {
				try {
					const outPath = build.initialOptions.outfile
					if (!outPath) {
						throw new Error('Output file path is not defined in esbuild options.')
					}

					const resolvedPath = path.resolve(outPath)
					let code = fs.readFileSync(resolvedPath, 'utf8')

					// Remove export blocks: export { foo, bar };
					code = code.replace(/\nexport\s+\{[^}]+\};/g, '')

					// Remove export keywords from declarations
					code = code.replace(/^export\s+/m, '')
					code = code.replace(/\nexport\s+/g, '\n')

					fs.writeFileSync(resolvedPath, code)
				}
				catch (error) {
					console.error('Error stripping exports:', error)
					process.exit(1)
				}
			})
		},
	}
}
