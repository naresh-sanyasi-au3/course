// Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
//     Ex. Sequence: [1, 9, 9]
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

order(node){
    if(node !== null){
        console.log("val: ", node.data)
        this.order(node.left)
        this.order(node.right)
    }
}
inorder(node){
    if(node !== null){
        this.order(node.left)
        console.log("val: ", node.data)
        this.order(node.right)

    }
}
} 
let bstObj = new BST()

bstObj.insert(1)
bstObj.insert(9)
bstObj.insert(9)
// bstObj.order(bstObj.root)
bstObj.inorder(bstObj.root)

