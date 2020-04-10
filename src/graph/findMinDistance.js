import Queue from "../queue";

export default function findMin(graph, source, destination) {
	if (source === destination) {
		return 0;
	}
	const numOfVertices = graph.vertices;
	const visited = new Set();
	const distance = new Map();
	const queue = new Queue(numOfVertices);
	queue.enqueue(source);
	distance.set(source, 0);
	while (!queue.isEmpty()) {
		const activeIdx = queue.dequeue();
		visited.add(activeIdx);
		let node = graph.list[activeIdx].getHead();
		while (node) {
			if (!visited.has(node.data)) {
				queue.enqueue(node.data);
				distance.set(node.data, distance.get(activeIdx) + 1);
			}
			if (node.data === destination) {
				return distance.get(node.data);
			}
			node = node.nextElement;
		}
	}
	return -1;
}
