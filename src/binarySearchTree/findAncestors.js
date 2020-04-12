const result = new Set();

function recFind(node, target) {
	if (target > node.val) {
		result.add(node.val);
		recFind(node.rightChild, target);
	} else if (target < node.val) {
		result.add(node.val);
		recFind(node.leftChild, target);
	}
}

export default function findAncestors(node, target) {
	recFind(node, target);
	return [...result].reverse();
}
