// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}
    
export default class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(newData) {
    const tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this;
  }

  isEmpty() {
    return (this.head == null);
  }

  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } 
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
      console.log("null");
      return true;
    
  }

  getHead() {
    return this.head;
  }

  setHead(newHead) {
    this.head = newHead;
    return this;
  }

  getListStr() {
    if (this.isEmpty()) {
      return "null";
    } 
      let st = "";
      let temp = this.head
      while (temp != null) {
        st += String(temp.data);
        st += " -> ";
        temp = temp.nextElement;
      }
      st += "null";
      return st;
    
  }

  insertAtTail(newData) {
    const node = new Node(newData);

    if (this.isEmpty()) {
      this.head = node;
      return this;
    }
    
    let currentNode = this.head;
    while (currentNode.nextElement != null) {
      currentNode = currentNode.nextElement;
    }
    currentNode.nextElement = node;
    return this;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.data == value) {
        return true; 
      }
      currentNode = currentNode.nextElement
    }
    return false;
  }

  deleteAtHead() {
    if (this.isEmpty()) {
      return this;
    }
    const firstElement = this.head;
    this.head = firstElement.nextElement;

    return this;
  }

  deleteVal(value) {
    let deleted = null; 

    if (this.isEmpty()) {
      return false;
    }

    let currentNode = this.head;
    if (currentNode.data == value) {
      this.head = currentNode.nextElement;
      return true;
    }

    while (currentNode.nextElement != null) {
      if (currentNode.nextElement.data == value) {
        currentNode.nextElement = currentNode.nextElement.nextElement;
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    deleted = false;
    return deleted;
  }

  deleteAtTail() {
    if (this.isEmpty()) {
      return this;
    }
    
    let firstNode = this.head;
    if (firstNode.nextElement == null) {
      this.deleteAtHead();
      return this;
    }
    while (firstNode.nextElement.nextElement != null) {
      firstNode = firstNode.nextElement;
    }
    firstNode.nextElement = null;
    return this;
  }
}
  