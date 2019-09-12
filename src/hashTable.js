import LinkedList from "./linkedList";
const defaultSize = 10;
export default class HashTable {
  constructor(size = defaultSize) {
    this.buckets = Array(size)
      .fill(null)
      .map(() => new LinkedList());
  }
  hash(str) {
    let sum = 0;
    str.split("").forEach((_, index) => {
      sum += str.charCodeAt(index);
    });
    return sum % this.buckets.length;
  }
  set(key, value) {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.buckets[keyHash];
    bucketLinkedList.append({ key, value });
  }
  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({
      cb: nodeValue => {
        return nodeValue.key === key;
      }
    });
    if (node) {
      return node.value.value;
    }
  }
  delete(key) {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      cb: nodeValue => nodeValue.key === key
    });
    if (node) {
      console.log("node", node);
      return bucketLinkedList.delete(node.value.value);
    }
    return null;
  }
}

const hTable = new HashTable();
const languages = [
  { lang: "Javascript", name: "John" },
  { lang: "PHP", name: "Rick" },
  { lang: "Python", name: "Kate" },
  { lang: "Swift", name: "James" },
  { lang: "Swift", name: "Bob" }
];
languages.forEach(item => hTable.set(item.lang, item.name));

console.log(hTable.get("Python"));
console.log(hTable.delete("Python"));
console.log(hTable);
