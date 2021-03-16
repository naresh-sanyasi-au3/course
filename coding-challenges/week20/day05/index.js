class Node {
    constructor(value, left = null, right = null){
      this.value = value
      this.left = left
      this.right = right
    }
  }
  function findPath(tree, sum, origSum){
    let path = 0
    if (tree == null)
      return
    if (tree.value == sum)
      return 1
    if (tree.left == null && tree.right == null)
      return path
    if (tree.left != null){
      path += findPath(tree.left, sum - tree.value, true)
      if (!origSum)
        path += findPath(tree.left, sum, false)
    }
    if (tree.right != null) {
      path += findPath(tree.right, sum - tree.value, true)
      if (!origSum)
        path += findPath(tree.right, sum, false)
    }
    return path
  }
  binaryTree = new Node(1)
  binaryTree.left = new Node(7)
  binaryTree.right = new Node(9)
  binaryTree.left.left = new Node(6)
  binaryTree.left.right = new Node(5)
  binaryTree.right.left = new Node(2)
  binaryTree.right.right = new Node(3)

  binaryTree1 = new Node(12)
  binaryTree1.left = new Node(7)
  binaryTree1.right = new Node(1)
  binaryTree1.left.left = new Node(4)
  binaryTree1.right.left = new Node(10)
  binaryTree1.right.right = new Node(5)
//   console.log("using boolean value")
  console.log(findPath(binaryTree, 12, false))
  console.log(findPath(binaryTree1, 11, false))