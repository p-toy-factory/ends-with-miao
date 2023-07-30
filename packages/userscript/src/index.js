import { endsWithMiao } from "ends-with-miao";

(() => {
	requestIdleCallback(() => {
		const iterator = document.createNodeIterator(
			document.body,
			NodeFilter.SHOW_TEXT,
		);

		for (
			let currentNode = iterator.nextNode();
			currentNode;
			currentNode = iterator.nextNode()
		) {
			const { textContent } = currentNode;
			const textContentEndsWithMiao = endsWithMiao(textContent);
			if (textContent !== textContentEndsWithMiao) {
				currentNode.textContent = textContentEndsWithMiao;
			}
		}
	});
})();
