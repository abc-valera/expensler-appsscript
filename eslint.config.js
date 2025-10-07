import antfu from '@antfu/eslint-config'

export default antfu({
	stylistic: {
		indent: 'tab',
	},

	// TypeScript and Vue are autodetected, you can also explicitly enable them:
	// typescript: true,
})
