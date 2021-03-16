class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

function getNext(root) {
  if (!root)
    return null

  if (root.left)
    return root.left

  if (root.right) 
    return root.right

  return getNext(root.next)
}

function connect(root) {
  if (!root) 
    return root

  if (root.right) {
    if (root.left.left !== null) {
      root.right.next = root.left.left
    }
    else 
      root.right.next = getNext(root.next)
  }

  if (root.left) 
    root.left.next = root.right ? root.right : getNext(root.next)

  connect(root.right)
  connect(root.left)
  return root
}


binaryTree = new Node(1)
binaryTree.left = new Node(2)
binaryTree.right = new Node(3)
binaryTree.left.left = new Node(4)
binaryTree.left.right = new Node(5)
binaryTree.right.left = new Node(6)
binaryTree.right.right = new Node(7)

console.log(connect(binaryTree))