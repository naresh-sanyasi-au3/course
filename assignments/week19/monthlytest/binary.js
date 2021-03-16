// Given a binary tree, populate an array to represent its zigzag level order traversal. 
// You should populate the values of all nodes of the first level from left to right, 
// then right to left for the next level and keep alternating in 
// the same manner for the following levels.

class Node{
    constructor(data, left, right){
        this.data = data
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
insert(data){
        let newNode = new Node(data)
        if(this.root === null)
        this.root = newNode
        else{
            this.insertNewNode(this.root, newNode)
        }
    }
insertNewNode(node, newNode){
    if(node.data >= newNode.data){

        if(node.left == null)
        node.left = newNode
        else
            this.insertNewNode(node.left, newNode)
    }
        else{
            if (node.right === null)
            node.right = newNode
            else
            this.insertNewNode(node.right, newNode)


        }

    }

preorder(node){
    if(node !== null){
        console.log("val: ", node.data)
        this.preorder(node.left)
        this.preorder(node.right)
    }
}
inorder(node){
    if(node !== null){
        this.preorder(node.left)
        console.log("val: ", node.data)
        this.preorder(node.right)

    }
}
postorder(node){
    if(node !== null){
        this.postorder(node.left)
        this.postorder(node.right)
        console.log("val: ", node.data)
    }
}
} 
let bstObj = new BST()
bstObj.insert(4)
bstObj.insert(7)
bstObj.insert(9)
bstObj.insert(2)
bstObj.insert(11)
bstObj.insert(17)

bstObj.preorder(bstObj.root)
bstObj.inorder(bstObj.root)
bstObj.postorder(bstObj.root)
