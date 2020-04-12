// eslint-disable-next-line max-classes-per-file
let counter;

export default function findKthMax(rootNode, k) {
	counter = 0;
	return reverseInOrder(rootNode, k).val;
}

function reverseInOrder(node, k) {
	if (node) {
		const rightChild = helper(node.rightChild, k);
		if (rightChild) {
			if (k === counter) {
				return node.rightChild;
			}
			return helper(node.rightChild, k);
		}
		counter++;
		if (k === counter) {
			return node;
		}
		return helper(node.leftChild, k);
	}
}
