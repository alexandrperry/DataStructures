import LinkedList from "../linkedList";

export default class Graph {
	constructor(vertices) {
		this.vertices = vertices;
		this.list = [];
		for (let i = 0; i < vertices; i++) {
			const temp = new LinkedList();
			this.list.push(temp);
		}
	}

	addEdge(source, destination) {
		if (source < this.vertices && destination < this.vertices) {
			this.list[source].insertAtHead(destination);
		}
		return this;
	}

	printGraph() {
		console.log(">>Adjacency List of Directed Graph<<");
		for (let i = 0; i < this.list.length; i++) {
			process.stdout.write(`|${String(i)}| => `);
			let temp = this.list[i].getHead();
			while (temp != null) {
				process.stdout.write(`[${String(temp.data)}] -> `);
				temp = temp.nextElement;
			}
			console.log("null ");
		}
	}

	strGraph() {
		let str = "";
		for (let i = 0; i < this.list.length; i++) {
			str = `${str}|${String(i)}| => `;
			let temp = this.list[i].getHead();
			while (temp != null) {
				str += `[${String(temp.data)}] -> `;
				temp = temp.nextElement;
			}
			str += "null ";
		}
		return str;
	}
}
