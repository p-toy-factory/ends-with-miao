// @ts-check
import { buildConfig } from "eslint-config-pcp";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
	{
		ignores: ["packages"],
	},
	...(await buildConfig()),
];
