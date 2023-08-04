// @ts-check
const { buildConfig } = require("eslint-config-ewm");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
	{
		files: ["src/**/*.js"],
	},
	...buildConfig({
		javascript: {
			env: {
				greasemonkey: true,
			},
		},
	}),
];
