// About the `\p{sc=}` in the regex:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape#scripts_and_script_extensions
// https://unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt

function includesJapaneseSyllabaries(input: string): boolean {
	// See the comment on the top of the file.
	return /\p{sc=Hira}|\p{sc=Kana}/gu.test(input);
}

export function endsWithMiao(input: string): string {
	if (includesJapaneseSyllabaries(input)) {
		return input;
	}
	// See the comment on the top of the file.
	return input.replace(/(?:(?!喵)(\p{sc=Han}))([！。…!.])/gu, "$1喵$2");
}
