// @ts-check
import { buildConfig } from "./dist/index.cjs";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
	...buildConfig(),
	{
		rules: {
			"no-autofix/perfectionist/sort-objects": [
				"warn",
				{
					"custom-groups": {
						name: "name",
					},
					groups: ["name", "unknown"],
				},
			],
		},
	},
];
