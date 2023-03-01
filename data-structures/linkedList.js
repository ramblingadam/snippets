class Node {
  constructor(value, next) {
    this.value = value
    this.next = next || null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  append(value) {
    const node = new Node(value)
    if(!this.head) {
      this.head = node
    }
    else {
      let current = this.head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
  }
  prepend(value) {
    const node = new Node(value)
    if(!this.head) {
      this.head = node
    }
    else {
      const oldHead = this.head
      this.head = node
      node.next = oldHead
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
}

export default LinkedList