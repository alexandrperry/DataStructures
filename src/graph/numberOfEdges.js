export default function numEdges(graph) {
  let sum = 0;
  for (let i = 0; i < graph.vertices; i++) {
    let node = g.list[i].getHead();
    while (node) {
      sum += 1;
      node = node.nextElement;
    }
  }
  // because in undirected graph every edge   
  // is connected twice between two vertices  
  return sum/2;
}
