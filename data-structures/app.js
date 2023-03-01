// import LinkedList from "./linked-list/LinkedList";
// import DoublyLinkedList from "./doubly-linked-list/doublyLinkedList";
const LinkedList = require('./linked-list/LinkedList')
const DoublyLinkedList = require('./doubly-linked-list/DoublyLinkedList')

const list1 = new LinkedList()

list1.append(0)
list1.append(1)
list1.append(3)
// list1.append(3)

// console.log(list1.length)

// console.log(list1)

list1.insertAtIndex('heyo', 0)
list1.insertAtIndex('heyo', 3)
list1.insertAtIndex('food', 1)
list1.insertAtIndex('love', 4)

list1.print()