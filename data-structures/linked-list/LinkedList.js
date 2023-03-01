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
  insertAtIndex(value, index) {
    if(index <= 0) {
      this.prepend(value)
    }
    else if(index >= this.length - 1) {
      this.append(value)
    }
    else {
      let current = this.head
      let prev = null
      for(let i = 0; i < index; i ++) {
        prev = current
        current = current.next
      }
      prev.next = new Node(value, current)
      this.length += 1
    }

  }
  removeAtIndex(index) {
    if(index <= 0 || index > this.length - 1) {
      return null
    }
    else {
      let current = this.head
      let prev = null
      for(let i = 0; i < index; i ++) {
        prev = current
        current = current.next
      }
      prev.next = current.next
      this.length -= 1
    }

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

  getByIndex(index) {
    if(index > this.length - 1 || index < 0) {
      return null
    }
    else {
      let current = this.head
      for(let i = 0; i < index; i ++){
        current = current.next
      }
      return current
    }
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
  print() {
    let output = ''
    let current = this.head
    while(current) {
      output += `${current.value} => `
      current = current.next
    }
    output += 'null'
    console.log(output)
    return output
  }
}

module.exports = LinkedList