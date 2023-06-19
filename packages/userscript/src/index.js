import { endsWithMiao } from "ends-with-miao";

(() => {
  const isInDevEnv = ["localhost", "127.0.0.1", "0.0.0.0"].includes(
    location.hostname
  );
  if (isInDevEnv) {
    return;
  }
  requestIdleCallback(() => {
    const iterator = document.createNodeIterator(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    for (
      let currentNode = iterator.nextNode();
      Boolean(currentNode);
      currentNode = iterator.nextNode()
    ) {
      const { textContent } = currentNode;
      const textContentEndsWithMiao = endsWithMiao(currentNode.textContent);
      if (textContent !== textContentEndsWithMiao) {
        currentNode.textContent = textContentEndsWithMiao;
      }
    }
  });
})();
