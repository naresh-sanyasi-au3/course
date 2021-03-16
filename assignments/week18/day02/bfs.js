class Node {
    constructor(value, left, right) {
      this.value = value
      this.left = left
      this.right = right
    }
  }
  
  const BFS = (tree, callback) => {
    if (tree == null) {
      return;
    }
  
    let queue = [tree];
  
    while (queue.length > 0) {
      let item = queue.shift();
      let value = item.value;
      callback(value);
  
      if (item.left == null && item.right == null) {
        continue;
      }
      if (item.left != null) {
        queue.push(item.left);
      }
      if (item.right != null) {
        queue.push(item.right);
      }
    }
  }
  
  binaryTree = new Node(1,
    new Node(2, null, null), new Node(3,
      new Node(4, null, null), null));
  
  BFS(binaryTree, console.log)
  