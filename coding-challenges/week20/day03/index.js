class Node {
    constructor(value, left = null, right = null){
      this.value = value
      this.left = left
      this.right = right
    }
  }
  
  function levelOrderSuccessor(tree, node, callback){
  
    if (tree === null)
      return null
  
    if (tree === node){
      if (tree.left) 
        return tree.left
      
      else if (tree.right) 
        return tree.right
      
      else
        return null
    }
  ``
    var queue = [tree]
    var out = []
    
    while (queue.length > 0) {
      var item = queue.pop()
      var value = item.value
  
      if (item.left !== null) 
        queue.push(item.left)
      
      if (item.right !== null)
        queue.push(item.right)
  
      if (item === node)
        break
    }
    callback(value)
  }
  
  var binaryTree = new Node(1)
  binaryTree.left = new Node(2)
  binaryTree.right = new Node(3)
  binaryTree.left.left = new Node(4)
  binaryTree.left.right = new Node(5)
  
  
  var binaryTree1 = new Node(12)
  binaryTree1.left = new Node(7)
  binaryTree1.right = new Node(1)
  binaryTree1.left.left = new Node(9)
  binaryTree1.right.left = new Node(10)
  binaryTree1.right.right = new Node(5)
  
  
  levelOrderSuccessor(binaryTree, 3, console.log)
  levelOrderSuccessor(binaryTree1, 1, console.log)

