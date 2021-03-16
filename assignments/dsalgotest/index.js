// Coding challenge #3
// We have given a binary search tree and we want to delete the leaf nodes from the binary search tree.

// Example:
// Input: Inorder before Deleting the leaf node
//        5 10 15 20 25 30 35


// Output: Inorder after Deleting the leaf node
//         10 20 30

//         This is the binary search tree where we
//         want to delete the leaf node.
//               20
//            /     \
//           10      30
//          /  \    /  \
//        5     15 25   35 

//         After deleting the leaf node the binary 
//         search tree looks like
//               20
//            /     \
//           10      30




class Node {
    constructor(data){
      this.data = data
      this.left = null
      this.right = null
    }
  }
  class BST {
    constructor(){
      this.root = null
    }
    insert(data){
      let newNode = new Node(data)
      if (this.root == null)
        this.root = newNode
      else{
        this.insertNewNode(this.root, newNode)
      }
    }
    insertNewNode(node, newNode){
      if (node.data >= newNode.data){
        if (node.left == null) 
          node.left = newNode
        else 
          this.insertNewNode(node.left, newNode)
      } else{
        if (node.right == null)
          node.right = newNode
        else
          this.insertNewNode(node.right, newNode)
      }
    }
    deleteLeafNode(node){
      if (this.root == null)
        return null
      if (node.left == null && node.right == null)
        return null
      node.left = this.deleteLeafNode(node.left)
      node.right = this.deleteLeafNode(node.right)
      return node
    }
    inorder(node){
      if (node !== null){
        this.inorder(node.left)
        console.log("val: ", node.data)
        this.inorder(node.right)
      }
    }
  }
  let bstObj = new BST()
  bstObj.insert(20)
  bstObj.insert(10)
  bstObj.insert(30)
  bstObj.insert(5)
  bstObj.insert(15)
  bstObj.insert(25)
  bstObj.insert(35)
  console.log('Before Deleting Leaf Node')
  bstObj.inorder(bstObj.root)
  console.log('\n After Deleting Leaf Node')
  bstObj.root1 = bstObj.deleteLeafNode(bstObj.root)
  bstObj.inorder(bstObj.root1)