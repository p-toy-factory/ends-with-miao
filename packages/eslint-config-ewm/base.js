// @ts-check
const js = require("@eslint/js");

/** @type {import("eslint").Linter.FlatConfig} */
module.exports = {
	linterOptions: {
		reportUnusedDisableDirectives: true,
	},
	rules: {
		...js.configs.recommended.rules,
	},
};
