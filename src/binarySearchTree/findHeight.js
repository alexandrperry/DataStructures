function findHeight(rootNode) {
	if (rootNode === null) return 0;
	if (rootNode.leftChild === null && rootNode.rightChild === null) {
		return 0;
	}
	const leftChild = findHeight(rootNode.leftChild);
	const rightChild = findHeight(rootNode.rightChild);
	if (leftChild > rightChild) {
		return leftChild + 1;
	}
	return rightChild + 1;
}
