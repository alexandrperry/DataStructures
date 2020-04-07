"use strict";
const LinkedList = require('./LinkedList.js');
const Query = require('./Query.js');
const Stack = require('./Stack.js');

class Graph {
  constructor(vertices) {  
    this.vertices = vertices;
    this.list = [];
    for (let i = 0; i < vertices; i++) {
      let temp = new LinkedList();
      this.list.push(temp);
    }
  }

  addEdge(source, destination) {
    if (source < this.vertices && destination < this.vertices){
      this.list[source].insertAtHead(destination); 
    }
    return this;
  }

  printGraph() {
    console.log(">>Adjacency List of Directed Graph<<");
    for (let i = 0; i < this.list.length; i++) {
      process.stdout.write("|" + String(i) + "| => ");
      let temp = this.list[i].getHead();
      while (temp != null) {
        process.stdout.write("[" + String(temp.data) + "] -> ");
        temp = temp.nextElement;
      }
      console.log("null ");
    }
  }

  strGraph() {
    let str = "";
    for (let i = 0; i < this.list.length; i++) {
      str = str + "|" + String(i) + "| => ";
      let temp = this.list[i].getHead();
      while (temp != null) {
        str += ("[" + String(temp.data) + "] -> ");
        temp = temp.nextElement;
      }
      str += "null ";
    }
    return str;
  }
  //Breadth First Traversal of Graph g from source vertex 
  bfsTraversal(graph, source = 0) {
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
  //Depth First Traversal of Graph "g" from source vertex 

  dfsTraversal(graph, source = 0) {
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
}
