import MaxHeap from "./maxHeap";

export default function findKLargest(arr, k) {
	const heap = new MaxHeap();
	heap.buildHeap(arr);
	const result = [];
	for (let i = 0; i < k; i++) {
		result.push(heap.removeMax());
	}
	return result;
}
