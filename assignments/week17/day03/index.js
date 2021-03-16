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
findMin(){
    let node = this.root;
    if(node == null)
    return;
    while(node.left){
        node = node.left;
    }
    return node.data;
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
        this.inorder(node.left)
        console.log("val: ", node.data)
        this.inorder(node.right)

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

bstObj.insert(50)
bstObj.insert(43)
bstObj.insert(53)
bstObj.preorder(bstObj.root)
bstObj.inorder(bstObj.root)
bstObj.postorder(bstObj.root)
// bstObj.findMin();



