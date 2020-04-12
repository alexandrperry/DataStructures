export default class MaxHeap {
	constructor() {
		this.heap = [];
		this.elements = 0;
	}

	insert(val) {
		if (this.elements >= this.heap.length) {
			this.elements += 1;
			this.heap.push(val);
			this.__percolateUp(this.heap.length - 1);
		} else {
			this.heap[this.elements] = val;
			this.elements += 1;
			this.__percolateUp(this.heap.length - 1);
		}
	}

	getMax() {
		if (this.elements != 0) return this.heap[0];
		return null;
	}

	removeMax() {
		if (this.elements > 1) {
			var max = this.heap[0];
			this.heap[0] = this.heap[this.elements - 1];
			this.elements -= 1;
			this.__maxHeapify(0);
			return max;
		}
		if (this.elements == 1) {
			var max = this.heap[0];
			this.elements -= 1;
			return max;
		}
		return null;
	}

	__percolateUp(index) {
		const parent = Math.floor((index - 1) / 2);
		if (index <= 0) return;
		if (this.heap[parent] < this.heap[index]) {
			const tmp = this.heap[parent];
			this.heap[parent] = this.heap[index];
			this.heap[index] = tmp;
			this.__percolateUp(parent);
		}
	}

	__maxHeapify(index) {
		const left = index * 2 + 1;
		const right = index * 2 + 2;
		let largest = index;
		if (this.elements > left && this.heap[largest] < this.heap[left]) {
			largest = left;
		}
		if (this.elements > right && this.heap[largest] < this.heap[right])
			largest = right;
		if (largest != index) {
			const tmp = this.heap[largest];
			this.heap[largest] = this.heap[index];
			this.heap[index] = tmp;
			this.__maxHeapify(largest);
		}
	}

	buildHeap(arr) {
		this.heap = arr;
		this.elements = this.heap.length;
		for (let i = this.heap.length - 1; i >= 0; i--) {
			this.__maxHeapify(i);
		}
	}
}
