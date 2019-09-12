import List from "./list";
import Stack from "./stack";
import Queue from "./queue";
import LinkedList from "./linkedList";
import Dictionary from "./dictionary";
import HashTable from "./hashTable";
import BinaryTree from "./binaryTree";
const list = new List();
list.append(true);
list.append(null);
list.append(5);
//console.log(test.remove(null));
list.insert(228, true);
//console.log(test.toString());

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.pop();
stack.push(3);
//console.log(stack.peek());

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
// console.log(queue.toString());
// console.log(queue.empty());

const ll = new LinkedList();
ll.prepend("gav")
  .append("meow")
  .append("mooo")
  .prepend("shhhh");
// console.log(ll);
// console.log(ll.delete('gav'))
// console.log(ll);

const dictionary = new Dictionary();
dictionary.add("Person 1", 28);
dictionary.add("Person 2", 7);
dictionary.add("Person 3", 19);
dictionary.remove("Person 2");
//dictionary.showAll();

// const hTable = new HashTable();
//  const languages = ["Javascript", "PHP", "Python", "Swift"];
//  languages.forEach(item => hTable.set(item));
//hTable.show();
