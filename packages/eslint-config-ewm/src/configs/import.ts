import { FlatConfig } from "../types";
import { importESLintPlugin, simpleImportSortESLintPlugin } from "./plugins";

export function javascriptImport(): FlatConfig[] {
	return [
		{
			name: "pinkchampagne:javascript:import",
			plugins: {
				import: importESLintPlugin,
				"simple-import-sort": simpleImportSortESLintPlugin,
			},
			rules: {
				"import/first": "error",
				"import/newline-after-import": "error",
				"import/no-duplicates": "error",
				"simple-import-sort/exports": "error",
				"simple-import-sort/imports": "error",
			},
		},
	];
}

export function typescriptImport(): FlatConfig[] {
	return [
		{
			name: "pinkchampagne:typescript:import",
			plugins: {
				import: importESLintPlugin,
			},
			...importESLintPlugin.configs.typescript,
		},
		{
			name: "pinkchampagne:typescript:import:overrides",
			settings: {
				// https://github.com/un-es/eslint-plugin-i#typescript
				"import/resolver": {
					node: true,
					typescript: true,
				},
			},
		},
	];
}
