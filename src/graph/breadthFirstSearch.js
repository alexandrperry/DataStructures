import Queue from '../queue'
//Breadth First Traversal of Graph g from source vertex 
export default function bfsTraversal(graph, source = 0) {
  let num_of_vertices = graph.vertices;
  const visited = new Set()
  let queue = new Queue(num_of_vertices);
  for(let i = source; i < num_of_vertices; i++){
    if(!visited.has(i)){
      queue.enqueue(i)
      while(!queue.isEmpty()){
        const activeIdx = queue.dequeue()
        visited.add(activeIdx)
        let node = graph.list[activeIdx].getHead()
        while(node){
          if(!visited.has(node.data)){
            queue.enqueue(node.data)
          }
          node = node.nextElement
        }
      }
    }
  }
  return [...visited].join('');
}