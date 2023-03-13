class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value)
    this.count = 1
  }

  size() {
    return this.count
  }

  insert(value) {
    this.count ++

    let newNode = new Node(value)
    // let current = this.root
    function findInsertPoint(current) {
      //// If value to be inserted is less than the value of the current node, go LEFT.
      if(newNode.value < current.value) {
        //// If the current node already has a LEFT child, recurse on that child.
        if(current.left) {
          return findInsertPoint(current.left)
        }
        //// Otherwise, insert our new node as the LEFT child of the current node.
        else {
          current.left = newNode
        }
      }
      //// If value to be inserted is greater than the value of the current node, go RIGHT.
      if(newNode.value > current.value) {
        //// If the current node already has a RIGHT child, recurse on that child.
        if(current.right) {
          return findInsertPoint(current.right)
        }
        //// Otherwise, insert our new node as the RIGHT child of the current node.
        else {
          current.right = newNode
        }
      }
    }

    findInsertPoint(this.root)
  }

  min() {
    function findMin(current) {
      if(current.left) {
        return findMin(current.left)
      }
      else return current.value
    }

    return findMin(this.root)
  }

  max() {
    function findMax(current) {
      if(current.right) {
        return findMax(current.right)
      }
      else return current.value
    }

    return findMax(this.root)
  }

  maxDepth() {
    //// Leon's solution:
    function dig(current) {
      if(!current) return 0
      else return Math.max(dig(current.left), dig(current.right)) + 1
    }
    return dig(this.root)

    //// My solution:
    
  }

  contains(value) {
    //// Old way. Works, but checks more nodes than needed. Would work great for searching a binary tree that is not a search tree, though.
    // function searchLeft(current) {
    //   if(current.value === value) return true
    //   else if (current.left) {
    //     return (searchLeft(current.left) || searchRight(current.left))
    //   }
    //   else return false
    // }
    // function searchRight(current) {
    //   if(current.value === value) return true
    //   else if (current.right) {
    //     return (searchRight(current.right) || searchLeft(current.right))
    //   }
    //   else return false
    // }

    // return searchLeft(this.root) || searchRight(this.root)
    //// New way. Take advantage of binary search tree structure to speed up search.
    function search(current) {
      if(value === current.value) return true
      else if(value < current.value && current.left) {
        return search(current.left)
      }
      else if(value > current.value && current.right) {
        return search(current.right)
      }
      else return false
    }

    return search(this.root)
  }

  //// --- Depth first search: Searches branch by branch
  //// in-order
  //// for each node, checks and returns values in this order: left, root, right
  dfsInOrder() {
    const result = []
    function search(current) {
      if(current.left) search(current.left)
      result.push(current.value)
      if(current.right) search(current.right)
    }
    search(this.root)
    return result
  }
  //// pre-order
  //// for each node, checks and returns in this order: root, left, right
  dfsPreOrder() {
    const result = []
    function search(current) {
      result.push(current.value)
      if(current.left) search(current.left)
      if(current.right) search(current.right)
    }
    search(this.root)
    return result
  }
  ////post-order
  //// for each node, checks and returns in this order: left, right, root
  dfsPostOrder() {
    const result = []
    function search(current) {
      if(current.left) search(current.left)
      if(current.right) search(current.right)
      result.push(current.value)
    }
    search(this.root)
    return result
  }

  //// --- Breadth first search: Searches level by level
  //// Utilize a queue.
  bfs() {
    //// Array-Based queue
    const queue = []
    const result = []
    function search(current) {
      result.push(current.value)
      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)

      while(queue.length) {
        search(queue.shift())
      }
    }

    search(this.root)

    return result
  }
}

const bst = new BinarySearchTree(15)

bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)
bst.insert(41)
bst.insert(48)
bst.insert(30)
bst.insert(35)
bst.insert(33)

console.log(bst)

console.log(bst.min())
console.log(bst.max())

// console.log(bst.contains(11))
console.log(bst.dfsInOrder())
console.log(bst.dfsPreOrder())
console.log(bst.dfsPostOrder())
console.log(bst.bfs())
console.log(bst.maxDepth())



// const maxDepth = root => {
//   if(!root) return 0
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
// }


// const left4 = {
//   value: 4,
//   left: null,
//   right: null
// }

// const left2 = {
//   value: 3,
//   left: left4,
//   right: null
// }

// const right2 = {
//   value: 3,
//   left: null,
//   right: null
// }


// const left1 = {
//   value: 1,
//   left: left2,
//   right: right2
// }

// const right1 = {
//   value: 1,
//   left: null,
//   right: null
// }

// const root = {
//   value: 0,
//   left: left1,
//   right: right1
// }



// console.log(maxDepth(root))