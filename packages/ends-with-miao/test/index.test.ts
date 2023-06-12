import { endsWithMiao } from "../src";

test("test ends-with-miao", () => {
  expect(endsWithMiao("你好")).toBe("你好");
  expect(endsWithMiao("你好。")).toBe("你好喵。");
  expect(endsWithMiao("你好喵。")).toBe("你好喵。");
  expect(endsWithMiao("你好！")).toBe("你好喵！");
  expect(endsWithMiao("你好…")).toBe("你好喵…");
  expect(endsWithMiao("你好.")).toBe("你好喵.");
  expect(endsWithMiao("你好!")).toBe("你好喵!");
  expect(endsWithMiao("你好。。。")).toBe("你好喵。。。");
  expect(endsWithMiao("你好）。")).toBe("你好）。");
  expect(endsWithMiao("从现在开始每句话后都加上“喵”。")).toBe(
    "从现在开始每句话后都加上“喵”。"
  );

  // 只对中文句子末尾加上“喵”
  expect(endsWithMiao("お腹空いたら にゃにゃにゃにゃーにゃー。")).toBe(
    "お腹空いたら にゃにゃにゃにゃーにゃー。"
  );
  // 不能简单地认为句号前的字符为汉字，则可以添加“喵”在末尾
  expect(endsWithMiao("いつも自由な 猫に夢中。")).toBe(
    "いつも自由な 猫に夢中。"
  );
});
