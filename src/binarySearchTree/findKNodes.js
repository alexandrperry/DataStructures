const result = new Set();
export default function findKNodes(rootNode, k) {
	if (k === 0) {
		result.add(rootNode.val);
	}
	if (k > 0) {
		findKNodes(rootNode.leftChild, k - 1);
		findKNodes(rootNode.rightChild, k - 1);
	}
	return [...result];
}
