class Stack {
  constructor() {
    this.tail = 0
    this.stack = {}
  }

  push(value) {
    this.tail ++
    this.stack[tail] = value
  }

  pop() {
    const value = this.stack[tail]
    delete this.stack[tail]
    this.tail --
    return value
  }

  peek() {
    return this.stack[tail]
  }
}