// @ts-expect-error No type declarations
import js from "@eslint/js";
import type { Linter } from "eslint";

export const rules: Linter.RulesRecord = {
	...js.configs.recommended.rules,
	"dot-notation": "error",
	eqeqeq: "error",
	"no-else-return": ["error", { allowElseIf: false }],
	"no-extra-bind": "error",
	"no-extra-label": "error",
	"no-floating-decimal": "error",
	"no-implicit-coercion": ["error", { disallowTemplateShorthand: true }],
	"no-lonely-if": "error",
	"no-undef-init": "error",
	"no-unneeded-ternary": "error",
	"no-useless-computed-key": ["error", { enforceForClassMembers: true }],
	"no-useless-rename": "error",
	"no-useless-return": "error",
	"no-var": "error",
	"object-shorthand": "error",
	"prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
	"prefer-const": ["error", { destructuring: "all" }],
	"prefer-destructuring": "error",
	"prefer-exponentiation-operator": "error",
	"prefer-object-has-own": "error",
	"prefer-object-spread": "error",
	"prefer-template": "error", // TODO: not auto fix
	"spaced-comment": "error",
	yoda: ["error", "never", { exceptRange: true }],
};
