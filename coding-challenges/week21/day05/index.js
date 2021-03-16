class Node {
    constructor(value, left = null, right = null) {
      this.value = value
      this.left = left
      this.right = right
    }
  }
  const connect = function (root) {
    let curNode = root
    let child = {}
    while (curNode) {
      let nextLevelStart = null
      while (curNode) {
        nextLevelStart = nextLevelStart || curNode.left || curNode.right
        if (curNode.left) {
          child.next = curNode.left
          child = child.next
        }
        if (curNode.right) {
          child.next = curNode.right
          child = child.next
        }
        curNode = curNode.next
      }
      curNode = nextLevelStart
      child = {}
    }
    return root
  };
  binaryTree = new Node(1)
  binaryTree.left = new Node(2)
  binaryTree.right = new Node(3)
  binaryTree.left.left = new Node(4)
  binaryTree.left.right = new Node(5)
  binaryTree.right.left = new Node(6)
  binaryTree.right.right = new Node(7)
  console.log(connect(binaryTree))
