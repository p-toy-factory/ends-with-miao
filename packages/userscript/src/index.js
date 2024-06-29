// @ts-check

// eslint-disable-next-line spaced-comment
/// <reference types="tampermonkey" />

import { endsWithMiao } from "ends-with-miao";

function miao() {
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
		const textContentEndsWithMiao = endsWithMiao(
			// @ts-expect-error textContent must be a string
			textContent,
		);
		if (textContent !== textContentEndsWithMiao) {
			currentNode.textContent = textContentEndsWithMiao;
		}
	}
}

requestIdleCallback(miao);

GM_registerMenuCommand("手动触发", miao);
