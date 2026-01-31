import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { string } from 'rollup-plugin-string'

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
			dir: 'build',
			format: 'esm',
		},
		plugins: [
			disableEntryPointTreeShaking(),
			nodeResolve(),
			commonjs(),
			typescript(),
			string({ include: ['**/*.css', 'src/**/*.client.js'] }),
		],
	},
]
