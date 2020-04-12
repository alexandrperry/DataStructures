export default function findMin(rootNode) {
	let min = rootNode.val;
	let node = rootNode.leftChild;
	while (node) {
		if (node.val < min) {
			min = node.val;
		}
		node = node.leftChild;
	}
	return min;
}
