class Node {
    constructor(value, left, right) {
      this.value = value
      this.left = left
      this.right = right
    }
  }
  
  const DFS = (tree, callback) => {
    if (tree == null) {
      return;
    }
  
    let stack = [tree];
  
    while (stack.length > 0) {
      let item = stack.pop();
      let value = item.value;
      callback(value);
  
      if (item.left == null && item.right == null) {
        continue;
      }
      if (item.left != null) {
        stack.push(item.left);
      }
      if (item.right != null) {
        stack.push(item.right);
      }
    }
  }
  
  binaryTree = new Node(1,
    new Node(2, null, null), new Node(3,
      new Node(4, null, null), null));
  
  
  DFS(binaryTree, console.log);