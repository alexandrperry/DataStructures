import Stack from "../stack";

export default function detectCycle(graph, source = 0) {
	const numOfVertices = graph.vertices;
	const visited = new Set();
	const stack = new Stack(numOfVertices);
	for (let i = source; i < numOfVertices; i++) {
		if (!visited.has(i)) {
			stack.push(i);
			while (!stack.isEmpty()) {
				const activeIdx = stack.pop();
				visited.add(activeIdx);
				let node = graph.list[activeIdx].getHead();
				while (node) {
					if (!visited.has(node.data)) {
						stack.push(node.data);
						node = node.nextElement;
					} else {
						return true;
					}
				}
			}
		}
	}
	return false;
}
