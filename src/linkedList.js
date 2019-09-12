class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      console.log("newNode", this);
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }
  find({ value = null, cb = undefined }) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (cb && cb(currentNode.value)) {
        return currentNode;
      }
      if (value === currentNode.value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  delete(value) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    if (typeof this.head.value === "object") {
      if (this.head.value.value === value) {
        deletedNode = this.head;
        this.head = this.head.next;
      }
      let currentNode = this.head;
      while (currentNode.next) {
        if (currentNode.next.value.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
      if (this.tail.value.value === value) {
        this.tail = currentNode;
      }
    } else {
      if (this.head.value === value) {
        deletedNode = this.head;
        this.head = this.head.next;
      }
      let currentNode = this.head;
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
      if (this.tail.value === value) {
        this.tail = currentNode;
      }
    }
    return deletedNode;
  }
}
