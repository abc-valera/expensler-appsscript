import { env } from 'node:process'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import { config } from 'dotenv'

// Load environment variables
config({ path: './env/example.env' })
config({ path: './env/.env', override: true })

/**
 * Rollup plugin to disable tree shaking entry points.
 *
 * Used for apps script code in combination with the stripExports
 * plugin. Apps Script doesn't support import/export statement.
 * While rollup + stripExports correctly removes them, the lack
 * of exported entry points results in an empty bundle. This
 * disables tree shaking on the entry point modules to preserve
 * the bundles.
 *
 * @return plugin
 */
function disableEntryPointTreeShaking() {
	return {
		name: 'no-treeshaking',
		async resolveId(source, importer, options) {
			if (!importer) {
				const resolution = await this.resolve(source, importer, { skipSelf: true, ...options })
				// let's not tree shake entry points, as we're not exporting anything in Apps Script files
				resolution.moduleSideEffects = 'no-treeshake'
				return resolution
			}
			return null
		},
		async renderChunk(code) {
			// Strip final export statement
			return code.replace(/\nexport\s+\{.*\};/g, '')
		},
	}
}

// Rollup configs
export default [
	// Server-side bundles
	{
		input: 'src/cmd/main.ts',
		output: {
			dir: 'dist',
			format: 'esm',
		},
		plugins: [
			replace({
				include: ['src/**'],
				preventAssignment: true,
				values: {
					MONOBANK_TOKEN_PLACEHOLDER: loadEnv('MONOBANK_TOKEN'),
					MONOBANK_ACCOUNT_PLACEHOLDER: loadEnv('MONOBANK_ACCOUNT'),
				},
			}),
			disableEntryPointTreeShaking(),
			nodeResolve(),
			commonjs(),
			typescript(),
		],
	},
]

function loadEnv(name) {
	const val = env[name]
	if (!val) {
		throw new Error(`${name} is not set in environment variables`)
	}
	return val
}
