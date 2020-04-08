import Stack from '../stack'

export default function checkPath(graph, source, destination) {
	const numOfVertices = graph.vertices;
	const visited = new Set();
	const stack = new Stack(numOfVertices);
	stack.push(source);
	while (!stack.isEmpty()) {
		const activeIdx = stack.pop();
		if (activeIdx === destination) {
			return true;
		}
		visited.add(activeIdx);
		let node = graph.list[activeIdx].getHead();
		while (node) {
			if (!visited.has(node.data)) {
				stack.push(node.data);
			}
			node = node.nextElement;
		}
	}
	return false;
}
