class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function depthMin(tree) {
    if (tree == null) 
      return 0;
  
    if (tree.left == null && tree.right == null)
      return 1;
    
    if (!tree.left)
      return depthMin(tree.right) + 1;
    
    if (!tree.right)
      return depthMin(tree.left) + 1;
  
    return Math.min(depthMin(tree.left), depthMin(tree.right)) + 1;
  }
  
  binaryTree = new Node(1);
  binaryTree.left = new Node(2);
  binaryTree.right = new Node(3);
  binaryTree.left.left = new Node(4);
  binaryTree.left.right = new Node(5);
  
  binaryTree1 = new Node(12);
  binaryTree1.left = new Node(7);
  binaryTree1.right = new Node(1);
  binaryTree1.right.left = new Node(10);
  binaryTree1.right.right = new Node(5);
  
  binaryTree2 = new Node(12);
  binaryTree2.left = new Node(7);
  binaryTree2.right = new Node(1);
  binaryTree2.left.left = new Node(9);
  binaryTree2.right.left = new Node(10);
  binaryTree2.right.right = new Node(5);
  binaryTree2.right.left.left = new Node(11);
  
  console.log(depthMin(binaryTree));
  console.log(depthMin(binaryTree1));
  console.log(depthMin(binaryTree2));