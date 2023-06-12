/*! For license information please see index.user.js.LICENSE.txt */
// ==UserScript==
// @name         以“喵”字作为句子结尾喵
// @author       pinkchampagne
// @description  
// @downloadURL  https://raw.githubusercontent.com/p-toy-factory/ends-with-miao/main/packages/userscript/dist/index.user.js
// @updateURL    https://raw.githubusercontent.com/p-toy-factory/ends-with-miao/main/packages/userscript/dist/index.user.js
// @grant        none
// @homepage     https://github.com/p-toy-factory/ends-with-miao#readme
// @license      AGPL-3.0
// @match        *://*/*
// @supportURL   https://github.com/p-toy-factory/ends-with-miao/issues
// @run-at       document-idle
// @version      0.1.14514
// ==/UserScript==
(() => {
  "use strict";
  requestIdleCallback((() => {
    const iterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
    for (let currentNode = iterator.nextNode(); Boolean(currentNode); currentNode = iterator.nextNode()) {
      const {textContent} = currentNode, textContentEndsWithMiao = function(input) {
        return /[\u3041-\u30FF]/.test(input);
      }(input = currentNode.textContent) ? input : input.replace(/(?:(?!喵)([\u4E00-\u9FA5]))([！。…!.])/g, "$1喵$2");
      textContent !== textContentEndsWithMiao && (currentNode.textContent = textContentEndsWithMiao);
    }
    var input;
  }));
})();