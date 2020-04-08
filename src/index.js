import Graph from './graph'

const graph = new Graph(5)

graph.addEdge(0,1)
graph.addEdge(0,2)
graph.addEdge(0,3)
graph.addEdge(0,4)
graph.addEdge(4,1)
graph.addEdge(4,3)

graph.printGraph()
