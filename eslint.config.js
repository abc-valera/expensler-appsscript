import antfu from '@antfu/eslint-config'

export default antfu({
	stylistic: {
		indent: 'tab',
	},
	rules: {
		'jsonc/sort-keys': 'off',

		// TODO: maybe enable these rules
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'unused-imports/no-unused-vars': 'off',
	},
})
