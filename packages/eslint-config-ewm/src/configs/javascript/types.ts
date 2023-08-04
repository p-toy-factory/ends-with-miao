export interface JavascriptESLintConfigBuilderOptions {
	/** @default true */
	enableSortImport?: boolean;
	env?: JavascriptESLintConfigBuilderEnvOptions;
	files?: string[];
	/** @default false */
	isInEditor?: boolean;
}

export interface JavascriptESLintConfigBuilderEnvOptions {
	/**
	 * Enable browser global variables.
	 *
	 * @default true
	 */
	browser?: boolean;
	/**
	 * Enable userscript global variables.
	 *
	 * @default false
	 */
	greasemonkey?: boolean;
	/**
	 * Enable Node.js global variables.
	 *
	 * @default true
	 */
	node?: boolean;
}
