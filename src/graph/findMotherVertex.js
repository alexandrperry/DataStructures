 import Stack from '../stack'

 export default function findMotherVertex(graph) {
  const numOfVertices = graph.vertices;
  const visited = new Set()
  const stack = new Stack(numOfVertices);
  let reachedVertex;
  for(let i = 0; i < numOfVertices; i++){
		reachedVertex = 0
		stack.push(i)
		while(!stack.isEmpty()){
			const activeIdx = stack.pop()
			visited.add(activeIdx)
			let node = graph.list[activeIdx].getHead()
			while(node){
				if(!visited.has(node.data)){
					stack.push(node.data)
				}
				reachedVertex++
				node = node.nextElement
			}
			// +1 is to include the source vertex(graph.list[i]) itself
			if(reachedVertex + 1 === graph.list.length){
				return i
			}
		}
  }
  return -1
}
