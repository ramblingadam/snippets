// import LinkedList from "./linked-list/LinkedList";
// import DoublyLinkedList from "./doubly-linked-list/doublyLinkedList";
const LinkedList = require('./linked-list/LinkedList')
const DoublyLinkedList = require('./doubly-linked-list/DoublyLinkedList')

const list1 = new LinkedList()

list1.append(1)
list1.append(2)
list1.append(3)

console.log(list1.length)

console.log(list1)