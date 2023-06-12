function checkIfIncludesJapaneseSyllabaries(input: string): boolean {
  // http://www.unicode.org/charts/nameslist/c_3040.html
  // https://unicode.org/charts/nameslist/c_30A0.html
  return /[\u3041-\u30FF]/.test(input);
}

export function endsWithMiao(input: string): string {
  if (checkIfIncludesJapaneseSyllabaries(input)) {
    return input;
  }
  // https://www.zhangxinxu.com/study/201611/chinese-language-unicode-range.html#:~:text=20902%E5%AD%97-,4E00%2D9FA5,-%E5%9F%BA%E6%9C%AC%E6%B1%89%E5%AD%97%E8%A1%A5%E5%85%85
  return input.replace(/(?:(?!喵)([\u4E00-\u9FA5]))([！。…!.])/g, "$1喵$2");
}
