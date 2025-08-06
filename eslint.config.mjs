/**
 * ESLint configuration file
 * @description Configuration for ESLint using flat config format. Sets up WordPress coding standards.
 *
 * @property {Array} ignores - Patterns of files to ignore during linting
 * @property {Object} files - File patterns to apply rules to
 * @property {Object} plugins - ESLint plugins configuration
 * @property {Object} rules - Custom ESLint rules
 * @property {Object} languageOptions - Language-specific options including globals
 *
 * @exports {Array} Default ESLint configuration array
 */
import js from '@eslint/js';
import wp from '@wordpress/eslint-plugin';
import globals from 'globals';

export default [
	{
		ignores: ['**/*.min.js'], // Exclude minified files.
	},
	js.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
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
