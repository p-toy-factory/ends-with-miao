import { jsonc } from "@antfu/eslint-config";
import type { Linter } from "eslint";
import type { FlatGitignoreOptions } from "eslint-config-flat-gitignore";

import type { JavascriptESLintConfigBuilderOptions } from "./configs/javascript";
import type { PerfectionistESLintConfigBuilderOptions } from "./configs/perfectionist";
import type { TypescriptESLintConfigBuilderOptions } from "./configs/typescript";

export interface FlatConfig extends Linter.FlatConfig {
	name?: string;
}

export interface BuildConfigOptions {
	gitignore?: boolean | FlatGitignoreOptions;
	isInEditor?: boolean;
	javascript?: JavascriptESLintConfigBuilderOptions;
	/** @default true */
	jsonc?: boolean | Parameters<typeof jsonc>[0];
	/** @default true */
	node?: boolean;
	/** @default true */
	perfectionist?: boolean | PerfectionistESLintConfigBuilderOptions;
	/** @default true */
	sortImport?: boolean;
	/**
	 * @default true
	 * @requires `jsonc` is `true`
	 */
	sortPackageJson?: boolean;
	/**
	 * @default true
	 * @requires `jsonc` is `true`
	 */
	sortTsconfig?: boolean;
	typescript?: boolean | TypescriptESLintConfigBuilderOptions;
	unicorn?: boolean;
}
