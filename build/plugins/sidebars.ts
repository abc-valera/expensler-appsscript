import type { Plugin } from 'esbuild'
import fs from 'node:fs'
import path from 'node:path'
import { build } from 'esbuild'
import { solidPlugin } from 'esbuild-plugin-solid'

// TODO: maybe this can be done simpler
export function sidebarPlugin(): Plugin {
	return {
		name: 'sidebar-plugin',
		setup(build_context) {
			// Load HTML files
			build_context.onLoad({ filter: /\.html$/ }, async (args) => {
				const htmlContent = fs.readFileSync(args.path, 'utf8')
				const dir = path.dirname(args.path)
				let modifiedHtml = htmlContent

				// Find and embed CSS files
				const linkRegex = /<link\s+rel="stylesheet"\s+href="([^"]+\.css)"\s*\/?>/g
				const cssMatches = [...htmlContent.matchAll(linkRegex)]

				// Process each CSS reference
				for (const match of cssMatches) {
					const cssFile = match[1]
					const cssPath = path.resolve(dir, cssFile)

					// Read the CSS file content
					if (fs.existsSync(cssPath)) {
						const cssContent = fs.readFileSync(cssPath, 'utf8')

						// Replace the link tag with inline style
						modifiedHtml = modifiedHtml.replace(
							match[0],
							`<style>\n${cssContent}\n\t</style>`,
						)
					}
				}

				// Find all script tags with .tsx src
				const scriptRegex = /<script\s+src="([^"]+\.tsx)"><\/script>/g
				const scriptMatches = [...modifiedHtml.matchAll(scriptRegex)]

				// Process each .tsx reference
				for (const match of scriptMatches) {
					const tsxFile = match[1]
					const tsxPath = path.resolve(dir, tsxFile)

					// Bundle the .tsx file with esbuild + solidPlugin
					const result = await build({
						entryPoints: [tsxPath],
						bundle: true,
						write: false,
						format: 'iife',
						target: 'es2016',
						plugins: [solidPlugin()],
					})

					// Get the bundled JavaScript code
					const jsCode = result.outputFiles[0].text

					// Replace the script tag with inline script
					modifiedHtml = modifiedHtml.replace(
						match[0],
						`<script>\n${jsCode}\n</script>`,
					)
				}

				// Return the modified HTML as a file to be copied
				return {
					contents: modifiedHtml,
					loader: 'copy',
				}
			})
		},
	}
}
