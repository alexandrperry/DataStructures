export default function isTree(graph) {
  const visited = new Set()
  function checkCycle(idx,parent){
    visited.add(idx)
    let node = graph.list[idx].getHead()
    while(node){
      if(!visited.has(node.data)){
        if(checkCycle(node.data,idx) === true) return true  
      }
      else if (parent !== node.data) return true
      node = node.nextElement
    }
    return false
	}
	// To check whether an undirected graph is a tree or not, we’ll check the following :
	// 1- There is no cycle in the graph.
	// 2- The graph is connected.
  const cycle = checkCycle(0,-1)
  const connectedGraph = visited.size === graph.list.length
  if(cycle === false && connectedGraph === true){
    return true
  }
  return false
}
