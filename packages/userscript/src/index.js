// @ts-check

// eslint-disable-next-line spaced-comment
/// <reference types="tampermonkey" />

import { endsWithMiao } from "ends-with-miao";

function miao(
	iterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT),
) {
	const currentNode = iterator.nextNode();
	if (currentNode === null) {
		return;
	}
	if (
		!currentNode.parentNode ||
		!["script", "style", "svg"].includes(
			currentNode.parentNode.nodeName.toLowerCase(),
		)
	) {
		const { textContent } = currentNode;
		if (textContent) {
			const textContentEndsWithMiao = endsWithMiao(textContent);
			if (textContent !== textContentEndsWithMiao) {
				currentNode.textContent = textContentEndsWithMiao;
			}
		}
	}

	requestIdleCallback(() => miao(iterator));
}

miao();

GM_registerMenuCommand("手动触发", () => miao());
