import type { BuildOptions } from 'esbuild'
import fs, { rmSync } from 'node:fs'
import { build } from 'esbuild'
import { solidPlugin } from 'esbuild-plugin-solid'
import { sidebarPlugin } from './plugins/sidebars'
import { stripExports } from './plugins/strip-exports'

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

export const tsConfig: BuildOptions = {
	entryPoints: ['src/cmd/main.ts'],
	outfile: 'output/main.js',
	format: 'esm',
	bundle: true,
	target: 'es2016',
	platform: 'node',
	resolveExtensions: ['.ts', '.json'],
	define: {
		EXPENSLER_VERSION: JSON.stringify(pkg.version),
	},
	plugins: [
		stripExports(),
	],
}

export const solidConfig: BuildOptions = {
	entryPoints: ['src/**/*.html'],
	outdir: 'output',
	outbase: 'src',
	bundle: true,
	target: 'es2016',
	plugins: [
		sidebarPlugin(),
		solidPlugin(),
	],
}

rmSync('output', { recursive: true, force: true })
await build(tsConfig)
await build(solidConfig)

fs.copyFileSync('src/appsscript.json', 'output/appsscript.json')
