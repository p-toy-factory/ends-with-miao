import fs from "node:fs";
import { env } from "node:process";

import {
	ignores,
	jsonc,
	node,
	sortPackageJson,
	sortTsconfig,
	unicorn,
} from "@antfu/eslint-config";
import { isCI } from "ci-info";
import gitignore from "eslint-config-flat-gitignore";
import { isPackageExists } from "local-pkg";

import { javascript } from "./configs/javascript";
import { perfectionist } from "./configs/perfectionist";
import { typescript } from "./configs/typescript";
import { BuildConfigOptions, FlatConfig } from "./types";

export { BuildConfigOptions } from "./types";

function resolveOptions<T extends object>(options?: T | true): T | undefined {
	return typeof options === "boolean" ? undefined : options;
}

export function buildConfig(options: BuildConfigOptions = {}): FlatConfig[] {
	const hasEditorEnv = Boolean(env.VSCODE_PID || env.JETBRAINS_IDE);
	const {
		gitignore: enableGitignore = fs.existsSync(".gitignore"),
		isInEditor = !isCI && hasEditorEnv,
		javascript: javascriptOptions,
		jsonc: enableJsonc = true,
		node: enableNode = true,
		perfectionist: enablePerfectionist = true,
		sortImport: enableSortImport = true,
		sortPackageJson: enableSortPackageJson = true,
		sortTsconfig: enableSortTsconfig = true,
		typescript: enableTypeScript = isPackageExists("typescript"),
		unicorn: enableUnicorn = true,
	} = options;

	if (!enableJsonc && (enableSortPackageJson || enableSortTsconfig)) {
		throw new TypeError(
			"`sortPackageJson` and `sortTsconfig` require `jsonc` is `true`",
		);
	}

	return (
		[
			ignores(),
			enableGitignore && gitignore(resolveOptions(enableGitignore)),

			javascript({ enableSortImport, isInEditor, ...javascriptOptions }),
			enableNode && node(),
			enablePerfectionist &&
				perfectionist({ isInEditor, ...resolveOptions(enablePerfectionist) }),
			enableUnicorn && unicorn(),

			enableTypeScript &&
				typescript({
					enableSortImport,
					...resolveOptions(enableTypeScript),
				}),

			enableJsonc &&
				jsonc({
					stylistic: false,
					...resolveOptions(enableJsonc),
				}),
			enableSortPackageJson && sortPackageJson(),
			enableSortTsconfig && sortTsconfig(),
		] as Array<boolean | FlatConfig | FlatConfig[]>
	)
		.flat()
		.filter((item): item is FlatConfig => typeof item === "object")
		.map((config) => {
			// Remove `files` property if it's undefined
			const { files, ...restConfig } = config;
			return files ? config : restConfig;
		});
}
