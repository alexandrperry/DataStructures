export default class Queue {
  constructor() {
    this.dataStore = [];
  }
  enqueue(e) {
    this.dataStore.push(e);
  }
  dequeque() {
    return this.dataStore.shift();
  }
  front() {
    return this.dataStore[0];
  }
  back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  toString() {
    let str = "";
    this.dataStore.forEach((_, index) => (str += this.dataStore[index] + "\n"));
    return str;
  }
  empty() {
    return !this.dataStore.length;
  }
}
