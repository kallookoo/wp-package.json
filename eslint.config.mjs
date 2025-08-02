import js from '@eslint/js';
import wp from '@wordpress/eslint-plugin';
import globals from 'globals';

export default [
	{
		ignores: ['**/*.min.js'], // Exclude minified files.
	},
	js.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: {
			'@wordpress/eslint-plugin': wp,
		},
		rules: {
			...wp.configs.recommended.rules,
			'prettier/prettier': 0, // Disabled the integrated prettier rules, see package.json.
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jquery, // Remove if jQuery is not used.
			},
		},
	},
	{
		files: ['**/*.js'],
		languageOptions: {
			sourceType: 'script',
		},
	},
];
