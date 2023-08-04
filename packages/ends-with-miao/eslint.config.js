// @ts-check
const { buildConfig } = require("eslint-config-ewm");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
	...buildConfig({
		typescript: {
			files: ["src/**/*.ts"],
		},
	}),
];
