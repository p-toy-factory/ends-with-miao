// @ts-check
import { buildConfig } from "eslint-config-pcp";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
	{
		ignores: [
			"dist",
			// ESLint: parsing error due to import attributes
			"webpack.config.js",
		],
	},
	...(await buildConfig({
		javascript: {
			env: {
				greasemonkey: true,
			},
		},
	})),
];
