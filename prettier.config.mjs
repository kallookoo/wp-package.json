/**
 * Prettier configuration file.
 * Extends WordPress Prettier configuration and overrides specific settings for JSON files.
 *
 * @file prettier.config.mjs - Prettier configuration module
 * @exports {import("prettier").Config} - Prettier configuration object
 * @since 1.0.0
 *
 * @see {@link https://prettier.io/docs/en/configuration.html Prettier Configuration}
 * @see {@link https://developer.wordpress.org/block-editor/reference-guides/packages/packages-prettier-config/ WordPress Prettier Config}
 */
import wp from '@wordpress/prettier-config';

/**
 * @type {import("prettier").Config}
 */
const config = {
	...wp,
	overrides: [
		{
			// Change the tabs config for json files.
			files: ['*.json'],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};

export default config;
