class Node{
  constructor(value,next=null){
    this.value=value;
    this.next=next;
  }
}
class LinkedList{
  constructor(head=null,tail=null){
    this.head=head;
    this.tail=tail;
  }
  addNew(val){
    let newNode= new Node(val);
    if(this.tail==null){
      this.head=newNode;
      this.tail=this.head;
    }
    else{
      this.tail.next=newNode;
      this.tail=newNode;
    }
  }
  print(node){
    let curr=node;
    while(curr){
      console.log(curr.value);
      curr=curr.next
    }
  }
  checkLL(){
    let slow=this.head;
    let fast=this.head;
    let prevSlow=null;
    let midNode="";
    let secondHead="";
    if(this.head!=null){
    while( fast!=null && fast.next!=null){
      prevSlow=slow;
    slow=slow.next;
    fast=fast.next.next;
    }
    midNode=slow; 
    if(fast==null){
     secondHead=slow;
     prevSlow.next=null;
   secondHead=  this.reversell(secondHead)
    }
    else {
    secondHead=slow.next;
    prevSlow.next=null
   secondHead= this.reversell(secondHead);
    }
  }
 return this.compareLL(this.head,secondHead);
  }
  reversell(node){
    let curr =node;
    let next="";
    let prev=null;
    while(curr!=null){
     next=curr.next;
     curr.next=prev;
     prev=curr;
     curr=next;
    }
   return prev;
  }
  compareLL(node1,node2){
    let curr1 =node1;
    let curr2=node2;
    while(curr1!=null&&curr2!=null){
      if(curr1.value==curr2.value){
        curr1=curr1.next;
        curr2=curr2.next;
      }
      else {return false;}
    }
    return true;
  }
  getBackLL(midNode,prevSlow,secondHead){
    if(midNode!=null){
     let midNext= this.reversell(secondHead);
     prevSlow.next=midNode;
     midNode.next= midNext;
    }
  }
}
let list1 =new LinkedList();
list1.addNew(2);
list1.addNew(4);
list1.addNew(6);
 list1.addNew(4);
list1.addNew(2);
console.log(list1.checkLL());

let list2 =new LinkedList();
list2.addNew(2);
list2.addNew(4);
list2.addNew(6);
list2.addNew(4);
list2.addNew(2);
list2.addNew(2);
console.log(list2.checkLL());