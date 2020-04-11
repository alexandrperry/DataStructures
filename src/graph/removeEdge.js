export default function removeEdge(graph, source, destination) {
	graph.list[source].deleteVal(destination);
	return graph;
}
