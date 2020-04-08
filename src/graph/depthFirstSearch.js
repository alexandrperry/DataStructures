import Stack from '../stack'
//Depth First Traversal of Graph "g" from source vertex 

export default function dfsTraversal(graph, source = 0) {
  let num_of_vertices = graph.vertices;
  const visited = new Set()
  let stack = new Stack(num_of_vertices);
  for(let i = source; i < num_of_vertices; i++){
    if(!visited.has(i)){
      stack.push(i)
      while(!stack.isEmpty()){
        const activeIdx = stack.pop()
        visited.add(activeIdx)
        let node = graph.list[activeIdx].getHead()
        while(node){
          if(!visited.has(node.data)){
            stack.push(node.data)
          }
          node = node.nextElement
        }
      }
    }
  }
  return [...visited].join('');
}