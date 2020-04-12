// eslint-disable-next-line max-classes-per-file
class TrieNode {
	constructor(char) {
		this.children = [];
		for (let i = 0; i < 26; i++) {
			// Total # of English Alphabets
			this.children[i] = null;
		}
		this.isEndWord = false; // will be true if the node represents the end of word
		this.char = char; // To store the value of a particular key
	}

	markAsLeaf() {
		this.isEndWord = true;
	}

	unMarkAsLeaf() {
		this.isEndWord = false;
	}
}

export default class Trie {
	constructor() {
		this.root = new TrieNode(""); // Root node
	}

	// Function to get the index of character 't'
	getIndex(t) {
		return t.charCodeAt(0) - "a".charCodeAt(0);
	}

	// Function to insert a key in the Trie
	insert(key) {
		// None keys are not allowed
		if (key == null) {
			return;
		}

		key = key.toLowerCase(); // Keys are stored in lowercase
		let currentNode = this.root;
		const index = 0; // To store the character index

		// Iterate the trie with the given character index,
		// If the index points to null
		// simply create a TrieNode and go down a level
		for (let level = 0; level < key.length; level++) {
			const index = this.getIndex(key[level]);

			if (currentNode.children[index] == null) {
				currentNode.children[index] = new TrieNode(key[level]);
				console.log(`${String(key[level])} inserted`);
			}
			currentNode = currentNode.children[index];
		}

		// Mark the end character as leaf node
		currentNode.markAsLeaf();
		console.log(`'${key}' inserted`);
	}

	// Function to search a given key in Trie
	search(key) {
		if (key == null) {
			return false; // null key
		}

		key = key.toLowerCase();
		let currentNode = this.root;
		let index = 0;

		// Iterate the Trie with given character index,
		// If it is null at any point then we stop and return false
		// We will return true only if we reach leafNode and have traversed the
		// Trie based on the length of the key

		for (let level = 0; level < key.length; level++) {
			index = this.getIndex(key[level]);
			if (currentNode.children[index] == null) {
				return false;
			}
			currentNode = currentNode.children[index];
		}
		if (currentNode != null && currentNode.isEndWord) {
			return true;
		}
		return false;
	}

	// Helper Function to return true if currentNode does not have any children
	hasNoChildren(currentNode) {
		for (let i = 0; i < currentNode.children.length; i++) {
			if (currentNode.children[i] != null) return false;
		}
		return true;
	}

	// Recursive function to delete given key
	deleteHelper(key, currentNode, length, level) {
		let deletedSelf = false;

		if (currentNode == null) {
			console.log("Key does not exist");
			return deletedSelf;
		}

		// Base Case: If we have reached at the node which points to the alphabet at the end of the key.
		if (level == length) {
			// If there are no nodes ahead of this node in this path
			// Then we can delete this node
			if (this.hasNoChildren(currentNode)) {
				currentNode = null;
				deletedSelf = true;
			}

			// If there are nodes ahead of currentNode in this path
			// Then we cannot delete currentNode. We simply unmark this as leaf
			else {
				currentNode.unMarkAsLeaf();
				deletedSelf = false;
			}
		} else {
			const childNode = currentNode.children[this.getIndex(key[level])];
			const childDeleted = this.deleteHelper(key, childNode, length, level + 1);
			if (childDeleted) {
				// Making children pointer also None: since child is deleted
				currentNode.children[this.getIndex(key[level])] = null;
				// If currentNode is leaf node that means currentNode is part of another key
				// and hence we can not delete this node and it's parent path nodes
				if (currentNode.isEndWord) deletedSelf = false;
				// If childNode is deleted but if currentNode has more children then currentNode must be part of another key
				// So, we cannot delete currenNode
				else if (this.hasNoChildren(currentNode) == false) deletedSelf = false;
				// Else we can delete currentNode
				else {
					currentNode = null;
					deletedSelf = true;
				}
			} else deletedSelf = false;
		}
		return deletedSelf;
	}

	// Function to delete given key from Trie
	delete(key) {
		if (this.root == null || key == null) {
			console.log("None key or empty trie error");
			return;
		}

		this.deleteHelper(key, this.root, key.length, 0);
	}
}
