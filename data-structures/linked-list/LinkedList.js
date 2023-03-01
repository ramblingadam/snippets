class Node {
  constructor(value, next) {
    this.value = value
    this.next = next || null
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null
    this.length = 0
  }
  append(value) {
    const node = new Node(value)
    if(!this.head) {
      this.head = this.tail = node
    }
    else {
      const oldTail = this.tail
      this.tail = node
      oldTail.next = node
    }
    this.length += 1
    // else {
    //   let current = this.head
    //   while(current.next) {
    //     current = current.next
    //   }
    //   current.next = node
    // }
  }
  prepend(value) {
    const node = new Node(value)
    if(!this.head) {
      this.head = this.tail = node
    }
    else {
      const oldHead = this.head
      this.head = node
      node.next = oldHead
    }
    this.length += 1
  }
  deleteHead() {
    if(!this.head) {
      return null
    }
    else if(!this.head.next) {
      this.head = null
    }
    else {
      this.head = this.head.next
    }
    this.length -= 1
  }

  deleteTail() {
    if(!this.head) {
      return null
    }
    else if(!this.head.next) {
      this.head = null
    }
    else {
      let current = this.head
      let prev = null
      while(current.next) {
        prev = current
        current = current.next
      }
      prev.next = null
    }
    this.length -= 1
  }
  search(value) {
    if(!this.head) {
      return null
    }
    else {
      let current = this.head
      while(current.value !== value) {
        if(!current.next) break
        current = current.next
        if(current.value === value) return current
      }
      return null
    }
  }
}

module.exports = LinkedList