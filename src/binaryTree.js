class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        let parent = current;
        if (data < current.data) {
          current = current.left;
          if (!current) {
            parent.left = node;
            break;
          }
        } else {
          current = current.right;
          if (!current) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }
  inOrder(node = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
  preOrder(node = this.root) {
    if (node) {
      console.log(node.data);
      this.inOrder(node.left);
      this.inOrder(node.right);
    }
  }
  postOrder(node = this.root) {
    if (node) {
      this.inOrder(node.left);
      this.inOrder(node.right);
      console.log(node.data);
    }
  }
  find(data) {
    let current = this.root;
    while (data !== current.data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current ? current : null;
  }
  delete(data) {
    this.removeNode(this.root, data);
  }
  removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      if (!(node.left && node.right)) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      let smallestNodeRight = () => {
        let current = node.right;
        while (true) {
          if (current.left) {
            current = current.left;
          } else {
            break;
          }
        }
        return current;
      };
      const tempData = smallestNodeRight();
      node.data = tempData.data;
      node.right = this.removeNode(node.right, tempData.data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
}

const bt = new BinaryTree();
bt.insert(50);
bt.insert(10);
bt.insert(100);
bt.insert(5);
bt.insert(4);
bt.insert(7);
bt.insert(15);
bt.insert(11);
bt.insert(20);
bt.insert(18);
bt.insert(25);
bt.insert(17);
bt.insert(19);
bt.insert(21);
bt.insert(26);
bt.insert(17.5);
bt.delete(20);
console.log(bt);
