// @ts-check
import config from "eslint-config-ewm";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
	{
		files: ["src/**/*.js"],
		ignores: ["node_modules/*"],
		...config.browser,
	},
];
