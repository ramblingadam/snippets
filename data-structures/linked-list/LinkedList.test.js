const LinkedList = require('./LinkedList')

describe('#prepend', () => {
  test('add a value to the START of the list', () => {
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
  test('add a value to the END of the list', () => {
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
describe('#getByIndex', () => {
  describe('with index less than 0', () => {
    test('should return null', () => {
      const list = new LinkedList()
      list.append(0)
      list.append(1)
  
      expect(list.getByIndex(-1)).toBe(null)
      expect(list.getByIndex(-8)).toBe(null)
    })

  })
  describe('with index greater than list length - 1', () => {
    test('should return null', () => {
      const list = new LinkedList()
      list.append(0)
      list.append(1)
      list.append(2)
  
      expect(list.getByIndex(4)).toBe(null)
      expect(list.getByIndex(9)).toBe(null)
    })

  })

  describe('with index >= 0 and <= list.length', () => {
    test('Return the node at the given index', () => {
      const list = new LinkedList()
      list.append(0)
      list.append(1)
      list.append(2)
      list.append(3)
      
      expect(list.getByIndex(0).value).toBe(0)
      expect(list.getByIndex(2).value).toBe(2)
      expect(list.getByIndex(1).value).toBe(1)
      list.prepend(-1)
      expect(list.getByIndex(1).value).toBe(0)
    })
  })

})

describe('#print', () => {
  test('Should print values of all nodes in an easy-to-read string', () => {
    const list = new LinkedList()
    list.append(0)
    list.append(1)
    list.append(2)
    list.append(3)

    expect(list.print()).toBe('0 => 1 => 2 => 3 => null')
  })
})

describe('#insertAtIndex', () => {
  describe('with index <= 0', () => {
    test('Should add value to the start of the list', () => {
      const list = new LinkedList()
      list.append(0)
      list.append(1)
      list.append(2)

      list.insertAtIndex('premature', -3)

      expect(list.head.value).toBe('premature')

      list.insertAtIndex('zero', 0)
      expect(list.head.value).toBe('zero')
    })
  })
  describe('with index >= length of list', () => {
    test('should add new node to end of list', () => {
      const list = new LinkedList()
      list.append(0)
      list.append(1)
      list.append(2)

      list.insertAtIndex('overshot', 6)
      expect(list.tail.value).toBe('overshot')
    })
  })
  describe('with index > 0 or < length of list', () => {
    test('Should add a new node with the given value at the given index', () => {
      const list = new LinkedList()
      list.append(0)
      list.append(2)
      list.append(4)
  
      list.insertAtIndex('middling',1)
      
      expect(list.getByIndex(1).value).toBe('middling')
      expect(list.getByIndex(0).next.value).toBe('middling')
      expect(list.getByIndex(1).next.value).toBe(2)
    })
    
  })
})

describe('#removeAtIndex', () => {
  describe('with index <= 0', () => {
    test('Should not modify list at all', () => {
      const list = new LinkedList()
      list.append(0)
      list.append(1)
      list.append(2)

      list.removeAtIndex(-3)

      expect(list.length).toBe(3)
    })
  })
  describe('with index > length of list', () => {
    test('Should not modify list', () => {
      const list = new LinkedList()
      list.append(0)
      list.append(1)
      list.append(2)

      list.removeAtIndex(4)

      expect(list.length).toBe(3)
    })
  })
  describe('with index >= 0 or <= length of list', () => {
    test('Should remove the node at the given index', () => {
      const list = new LinkedList()
      list.append(0)
      list.append(1)
      list.append(2)
      list.append(3)
  
      list.removeAtIndex(1)
      
      expect(list.getByIndex(1).value).toBe(2)
      expect(list.getByIndex(0).next.value).toBe(2)
      expect(list.getByIndex(1).next.value).toBe(3)
      expect(list.length).toBe(3)
    })
    
  })
})