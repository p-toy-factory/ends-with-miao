function includesHiragana(input: string) {
  // https://unicode.org/iso15924/iso15924-codes.html#:~:text=2004%2D05%2D01-,Hira,-410
  return /\p{Script=Hira}/gu.test(input);
}

function includesKatakana(input: string) {
  // https://unicode.org/iso15924/iso15924-codes.html#:~:text=2007%2D07%2D02-,Kana,-411
  return /\p{Script=Kana}/gu.test(input);
}

function includesJapaneseSyllabaries(input: string): boolean {
  return includesHiragana(input) || includesKatakana(input);
}

export function endsWithMiao(input: string): string {
  if (includesJapaneseSyllabaries(input)) {
    return input;
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape#scripts_and_script_extensions
  // https://unicode.org/iso15924/iso15924-codes.html#:~:text=500-,Han,-(Hanzi%2C%20Kanji%2C%20Hanja
  return input.replace(/(?:(?!喵)(\p{Script=Han}))([！。…!.])/gu, "$1喵$2");
}
