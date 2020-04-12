import MinHeap from "./minHeap";

export default function findKSmallest(arr, k) {
	const heap = new MinHeap();
	heap.buildHeap(arr);
	const result = [];
	for (let i = 0; i < k; i++) {
		result.push(heap.removeMin());
	}
	return result;
}
