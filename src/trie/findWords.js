export default function findWords(root, result = [], char = "") {
	if (root.char) {
		char += root.char;
	}
	if (root.isEndWord) {
		result.push(char);
	}
	for (let i = 0; i < 26; i++) {
		if (root.children[i]) {
			findWords(root.children[i], result, char);
		}
	}
	return result;
}
