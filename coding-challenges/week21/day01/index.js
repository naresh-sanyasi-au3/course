class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    push(val) {
      let newNode = new Node(val);
      
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } 
      else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    middleNode() {
    
      if (!this.head)
        return null;
  
      let slow = this.head;
      let fast = this.head;
  
      while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow.data;
    }
  
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  let list = new LinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.push(5);
  console.log(list.middleNode());
  
  let list1 = new LinkedList();
  list1.push(1);
  list1.push(2);
  list1.push(3);
  list1.push(4);
  list1.push(5);
  list1.push(6);
  console.log(list1.middleNode());
  
  let list2 = new LinkedList();
  list2.push(1);
  list2.push(2);
  list2.push(3);
  list2.push(4);
  list2.push(5);
  list2.push(6);
  list2.push(7);
  console.log(list2.middleNode());