class Graph {
  constructor(vertices) {
    this.vertices = new Array(vertices).fill("");
    this.edges = 0;
    this.adj = [];
    this.vertices.forEach((_, index) => {
      this.adj[index] = [];
    });
  }
  addEdge(x, y) {
    this.adj[x].push(y);
    this.adj[y].push(x);
    this.edges++;
  }
  show() {
    for (let i = 0; i < this.vertices.length; i++) {
      console.log(i, "-------->");
      for (let j = 0; j < this.vertices.length; j++) {
        if (typeof this.adj[i][j] !== "undefined") {
          console.log(this.adj[i][j]);
        }
      }
    }
  }
}

g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.show();
