// eslint-disable-next-line max-classes-per-file
class Node {
	constructor(value) {
		this.val = value;
		this.leftChild = null;
		this.rightChild = null;
	}
}

export default class BinarySearchTree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}

	insert(currentNode, newValue) {
		if (currentNode === null) {
			currentNode = new Node(newValue);
		} else if (newValue < currentNode.val) {
			currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
		} else {
			currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
		}
		return currentNode;
	}

	insertBST(newValue) {
		if (this.root == null) {
			this.root = new Node(newValue);
			return;
		}
		this.insert(this.root, newValue);
	}

	preOrderPrint(currentNode) {
		if (currentNode !== null) {
			console.log(currentNode.val);
			this.preOrderPrint(currentNode.leftChild);
			this.preOrderPrint(currentNode.rightChild);
		}
	}

	inOrderPrint(currentNode) {
		if (currentNode !== null) {
			this.inOrderPrint(currentNode.leftChild);
			console.log(currentNode.val);
			this.inOrderPrint(currentNode.rightChild);
		}
	}

	postOrderPrint(currentNode) {
		if (currentNode !== null) {
			this.postOrderPrint(currentNode.leftChild);
			this.postOrderPrint(currentNode.rightChild);
			console.log(currentNode.val);
		}
	}

	search(currentNode, value) {
		if (currentNode !== null) {
			if (value === currentNode.val) {
				return currentNode;
			}
			if (value < currentNode.val) {
				return this.search(currentNode.leftChild, value);
			}
			return this.search(currentNode.rightChild, value);
		}
		return null;
	}

	searchBST(value) {
		return this.search(this.root, value);
	}

	delete(currentNode, value) {
		if (!currentNode) {
			return false;
		}

		let parentNode;
		while (currentNode && currentNode.val != value) {
			parentNode = currentNode;
			if (value < currentNode.val) {
				currentNode = currentNode.leftChild;
			} else {
				currentNode = currentNode.rightChild;
			}
		}

		if (!currentNode) {
			return false;
		}
		if (currentNode.leftChild == null && currentNode.rightChild == null) {
			if (currentNode.val === this.root.val) {
				this.root = null;
				return true;
			}
			if (currentNode.val < parentNode.val) {
				parentNode.leftChild = null;
				return true;
			}
			parentNode.rightChild = null;
			return true;
		}
		if (!currentNode.rightChild) {
			if (currentNode.val === this.root.val) {
				this.root = currentNode.leftChild;
				return true;
			}
			if (currentNode.leftChild.val < parentNode.val) {
				parentNode.leftChild = currentNode.leftChild;
				return true;
			}
			parentNode.rightChild = currentNode.leftChild;
			return true;
		}
		if (!currentNode.leftChild) {
			if (currentNode.val === this.root.val) {
				this.root = currentNode.rightChild;
				return true;
			}
			if (currentNode.rightChild.val < parentNode.val) {
				parentNode.leftChild = currentNode.rightChild;
				return true;
			}
			parentNode.rightChild = currentNode.rightChild;
			return true;
		}
		let minRight = currentNode.rightChild;
		while (minRight.leftChild) {
			minRight = minRight.leftChild;
		}
		const temp = minRight.val;
		this.delete(this.root, minRight.val);
		currentNode.val = temp;
		return true;
	}
}
