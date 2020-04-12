import Trie from "./index";

export default function isFormationPossible(dict, word) {
	const trie = new Trie();
	for (let i = 0; i < dict.length; i++) {
		trie.insert(dict[i]);
	}
	let currentNode = trie.root;
	for (let i = 0; i < word.length; i++) {
		const char = trie.getIndex(word[i]);
		if (!currentNode.children[char]) {
			return false;
		}
		if (
			currentNode.children[char].isEndWord &&
			trie.search(word.substring(i + 1))
		) {
			return true;
		}
		if (currentNode) {
			currentNode = currentNode.children[char];
		}
	}
}
