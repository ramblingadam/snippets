class Node {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev || null
    this.next = next || null
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null
  }
  //// Append: Add node to end of list
  append(value) {
    const node = new Node(value)
    if(!this.tail) {
      this.tail = this.head = node
    }
    else {
      const oldTail = this.tail
      oldTail.next = node
      this.tail = node
      node.prev = oldTail
    }
  }
  //// Prepend: Add node to start of list
  prepend(value) {
    const node = new Node(value)
    if(!this.head) {
      this.head = this.tail = node
    }
    else {
      const oldHead = this.head
      oldHead.prev = node
      this.head = node
      node.next = oldHead
    }
  }
  //// deleteHead: Remove first node from list
  deleteHead() {
    if(this.head === null) {
      return
    }
    else {
      this.head = this.head.next
      this.head.prev = null
    }
  }
  //// deleteTail: Remove last node from list
  deleteTail() {
    if(this.tail === null) {
      return
    }
    else {
      this.tail = this.tail.prev
      this.tail.next = null
    }
  }
  //// Search: Return a node with a value matching search parameter
  search(value) {
    let node = this.head
    while(true) {
      if(node.value === value) {
        return node
      }
      else if(node.next === null) {
        return null
      }
      else {
        node = node.next
      }
    }
  }
  //// getMiddle: Return the middle node in the list in list length is odd, or a couplet of the two center nodes if list length is even.
  getMiddle() {
    let fast = this.head
    let slow = this.head
    while(fast && fast.next) {
      slow = slow.next
      fast = fast.next.next

    }
    if(fast) {
      return slow
    }
    else {
      return [slow.prev, slow]
    }
  }
  //// Reverse: Reverse the order of the linked list.
  reverse() {
    let current = this.head
    let prev = null
  
    while(current) {
      const temp = current.next
      current.next = prev
      current.prev = temp
      prev = current
      current = temp
    }
    //// First swap the lists head and tail references
    const oldHead = this.head
    this.head = this.tail
    this.tail = oldHead

    return this
  }

}
export default DoublyLinkedList