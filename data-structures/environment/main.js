import DoublyLinkedList from "../doublyLinkedList.js";
import LinkedList from "../linkedList.js";

const list1 = new LinkedList()

list1.append(1)
list1.append(2)
list1.append(3)
list1.prepend(0)
list1.prepend(-1)

console.log(list1.search(4))

list1.deleteTail()
list1.deleteHead()
list1.deleteHead()
list1.deleteHead()
list1.deleteHead()

console.log(list1)
