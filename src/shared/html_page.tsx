import type { PropsWithChildren } from '@kitajs/html'

export function SidebarPage({ styles, children }: PropsWithChildren<{ styles: string }>) {
	return (
		<>
			{'<!DOCTYPE html>'}
			<html>
				<head>
					<base target="_top" />
					<style>{styles}</style>
				</head>
				<body>{children}</body>
			</html>
		</>
	)
}
