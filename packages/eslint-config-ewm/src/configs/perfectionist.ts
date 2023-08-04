import { FlatConfig } from "../types";
import { noAutoFixESLintPlugin, perfectionistESLintPlugin } from "./plugins";

export interface PerfectionistESLintConfigBuilderOptions {
	/** @default false */
	isInEditor?: boolean;
}

export function perfectionist({
	isInEditor = false,
}: PerfectionistESLintConfigBuilderOptions): FlatConfig[] {
	return [
		{
			name: "pinkchampagne:perfectionist",
			plugins: {
				"no-autofix": noAutoFixESLintPlugin,
				perfectionist: perfectionistESLintPlugin,
			},
			rules: {
				"perfectionist/sort-array-includes": [
					"error",
					{
						"spread-last": true,
						type: "natural",
					},
				],
				// TODO: sort-classes
				"perfectionist/sort-exports": [
					"error",
					{
						type: "natural",
					},
				],
				// TODO: sort-jsx-props
				"perfectionist/sort-maps": [
					"error",
					{
						type: "natural",
					},
				],
				"perfectionist/sort-named-exports": [
					"error",
					{
						type: "natural",
					},
				],
			},
		},
		...(isInEditor ? noAutoFixRulesConfig : []),
	];
}

const defaultPerfectionistSortObjectRuleOptions = {
	"custom-groups": {
		id: "id",
	},
	groups: ["id", "unknown"],
	type: "natural",
};

const noAutoFixRulesConfig: FlatConfig[] = [
	{
		name: "pinkchampagne:perfectionist:no-autofix",
		rules: {
			"no-autofix/perfectionist/sort-interfaces": [
				"warn",
				defaultPerfectionistSortObjectRuleOptions,
			],
			"no-autofix/perfectionist/sort-object-types": [
				"warn",
				defaultPerfectionistSortObjectRuleOptions,
			],
			"no-autofix/perfectionist/sort-objects": [
				"warn",
				defaultPerfectionistSortObjectRuleOptions,
			],
			"no-autofix/perfectionist/sort-union-types": [
				"warn",
				{
					"ignore-case": true,
					"nullable-last": true,
					type: "natural",
				},
			],
		},
	},
];
