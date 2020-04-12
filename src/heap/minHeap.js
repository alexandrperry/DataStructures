export default class MinHeap {
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

	getMin() {
		if (this.heap.length) return this.heap[0];
		return null;
	}

	removeMin() {
		if (this.elements > 1) {
			var max = this.heap[0];
			this.heap[0] = this.heap[this.elements - 1];
			this.elements -= 1;
			this.__minHeapify(0);
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
		if (this.heap[parent] > this.heap[index]) {
			const tmp = this.heap[parent];
			this.heap[parent] = this.heap[index];
			this.heap[index] = tmp;
			this.__percolateUp(parent);
		}
	}

	__minHeapify(index) {
		const left = index * 2 + 1;
		const right = index * 2 + 2;
		let smallest = index;
		if (this.elements > left && this.heap[smallest] > this.heap[left]) {
			smallest = left;
		}
		if (this.elements > right && this.heap[smallest] > this.heap[right])
			smallest = right;
		if (smallest != index) {
			const tmp = this.heap[smallest];
			this.heap[smallest] = this.heap[index];
			this.heap[index] = tmp;
			this.__minHeapify(smallest);
		}
	}

	buildHeap(arr) {
		this.heap = arr;
		this.elements = this.heap.length;
		for (let i = this.heap.length - 1; i >= 0; i--) {
			this.__minHeapify(i);
		}
	}
}
