export default function totalWords(rootN) {
	let result = 0;
	if (rootN) {
		if (rootN.isEndWord) {
			result += 1;
		}
		for (let i = 0; i < 26; i++) {
			if (rootN.children[i]) {
				result += totalWords(rootN.children[i]);
			}
		}
	}
	return result;
}
