function minHeapify(heap, index) {
	const left = index * 2;
	const right = index * 2 + 1;
	let smallest = index;

	if (heap.length > left && heap[smallest] > heap[left]) {
		smallest = left;
	}
	if (heap.length > right && heap[smallest] > heap[right]) smallest = right;
	if (smallest !== index) {
		const tmp = heap[smallest];
		heap[smallest] = heap[index];
		heap[index] = tmp;
		minHeapify(heap, smallest);
	}
	return heap;
}

export default function convertMax(maxHeap) {
	for (let i = Math.floor(maxHeap.length / 2); i > -1; i--)
		maxHeap = minHeapify(maxHeap, i);
	return maxHeap;
}
