// eslint-disable-next-line max-classes-per-file
class HashEntry {
	constructor(key, data) {
		this.key = key;
		this.value = data;
		this.next = null;
	}
}

export default class HashTable {
	// Constructor
	constructor() {
		// Size of the HashTable
		this.slots = 10;
		// Current entries in the table
		// Used while resizing the table when half of the table gets filled
		this.size = 0;
		// Array of HashEntry objects (by deafult all null)
		this.bucket = [];
		for (let i = 0; i < this.slots; i++) {
			this.bucket[i] = null;
		}
		this.threshold = 0.6;
	}

	// Helper Functions
	get_size() {
		return this.size;
	}

	// Hash Function
	getIndex(key) {
		const index = key % this.slots;
		return index;
	}

	isEmpty() {
		return this.get_size() === 0;
	}

	insert(key, value) {
		// Find the node with the given key
		const b_Index = this.getIndex(key);
		if (this.bucket[b_Index] == null) {
			this.bucket[b_Index] = new HashEntry(key, value);
			console.log(`${String(key)}, ${String(value)} - inserted.`);
		} else {
			let head = this.bucket[b_Index];
			while (head != null) {
				if (head.key == key) {
					head.value = value;
					break;
				} else if (head.next == null) {
					head.next = new HashEntry(key, value);
					console.log(`${String(key)}, ${String(value)} - inserted.`);
					break;
				}
				head = head.next;
			}
		}

		this.size += 1;
		const load_factor = Number(this.size) / Number(this.slots);
		// Checks if 60% of the entries in table are filled, threshold = 0.6
		if (load_factor >= this.threshold) {
			this.resize();
		}
	}

	// Return a value for a given key
	search(key) {
		// Find the node with the given key
		const index = this.getIndex(key);
		let head = this.bucket[index];
		// Search key in the slots
		if (head != null) {
			while (head != null) {
				if (head.key === key) {
					return head.value;
				}
				head = head.next;
			}
		}
		console.log("Key not found");
		return null;
	}

	// Remove a value based on a key
	deleteVal(key) {
		// Find index
		const b_Index = this.getIndex(key);
		let head = this.bucket[b_Index];
		// If key exists at first slot
		if (head.key === key) {
			this.bucket[b_Index] = head.next;
			console.log("Key deleted");
			this.size -= 1;
			return this;
		}
		// Find the key in slots
		let prev = null;
		while (head != null) {
			// If key exists
			if (head.key === key) {
				prev.next = head.next;
				console.log("Key deleted");
				this.size -= 1;
				return this;
			}
			// Else keep moving in chain
			prev = head;
			head = head.next;
		}
		// If key does not exist
		console.log("Key not found");
		return null;
	}

	resize() {
		const newSlots = this.slots * 2;
		const newBucket = [];
		for (let n = 0; n < newSlots; n++) {
			newBucket[n] = null;
		}
		// rehash all items into new slots
		for (let i = 0; i < this.bucket.length; i++) {
			let head = this.bucket[i];
			while (head != null) {
				const newIndex = this.getIndex(head.key);
				if (newBucket[newIndex] == null) {
					newBucket[newIndex] = new HashEntry(head.key, head.value);
				} else {
					let node = newBucket[newIndex];
					while (node != null) {
						if (node.key === head.key) {
							node.value = head.value;
							node = null;
						} else if (node.next == null) {
							node.next = new HashEntry(head.key, head.value);
							node = null;
						} else {
							node = node.next;
						}
					}
				}
				head = head.next;
			}
		}
		this.bucket = newBucket;
		this.slots = newSlots;
	}
}
