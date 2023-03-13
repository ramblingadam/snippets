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
    this.count = 0
  }

  size() {
    return this.count
  }

  insert(value) {
    this.count ++

    let newNode = new Node(value);
    // let current = this.root
    (function findInsertPoint(current) {
      if(newNode.value < current.value) {
        if(current.left) {
          return findInsertPoint(current.left)
        }
        else {
          current.left = newNode
        }
      }
      if(newNode.value > current.value) {
        if(current.right) {
          return findInsertPoint(current.right)
        }
        else {
          current.right = newNode
        }
      }
    })(this.root);
    // findInsertPoint(this.root)
  }

  min() {

  }

  max() {

  }

  contains() {

  }

  //// Depth first search
  //in-order
  dfsInOrder() {

  }
  //pre-order
  dfsPreOrder() {

  }
  //post-order
  dfsPostOrder() {

  }

  //// Breadth first search
  bfs() {

  }
}

const bst = new BinarySearchTree(10)

bst.insert(7)
bst.insert(12)
bst.insert(9)
bst.insert(8)

console.log(bst)



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