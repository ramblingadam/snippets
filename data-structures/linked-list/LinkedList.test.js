const LinkedList = require('./LinkedList')

describe('#prepend', () => {
  test('add a value to the start of the list', () => {
    const list = new LinkedList()
    list.prepend(10)
    const oldHead = list.head
    list.prepend(20)

    expect(list.head.value).toBe(20)
    expect(list.tail.value).toBe(10)
    expect(oldHead.value).toBe(10)
    expect(list.length).toBe(2)
  })
})

describe('#append', () => {
  test('add a value to the start of the list', () => {
    const list = new LinkedList()
    list.append(10)
    list.append(20)
    const oldTail = list.tail
    list.append(30)

    expect(list.head.value).toBe(10)
    expect(list.tail.value).toBe(30)
    expect(oldTail.value).toBe(20)
    expect(list.length).toBe(3)
  })
})