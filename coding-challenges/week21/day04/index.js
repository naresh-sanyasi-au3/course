class Node{
    constructor(data,next){
      this.data=data;
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
          console.log(curr.data);
          curr=curr.next
        }
      }
     
      rotate(node,k){
       let count=0;
        let prev=null;
        let next=null;
        let curr=node;
        while( curr!=null && count<k){
          next=curr.next
         curr.next=prev;
         prev=curr;
         curr=next;
         count++;
        }
        if(next!=null){
           node.next=next;
          while(next!=null && count<(2*k-1)){
            count++;
            next=next.next;
          }
          console.log(next)
         next.next=this.rotate(next.next,k)
        }
        return prev
      }
  
  }
    let List =new LinkedList();
    List.addNew(1);
    List.addNew(2);
    List.addNew(3);
    List.addNew(4);
    List.addNew(5);
    List.addNew(6);
    List.addNew(7);
    List.addNew(8);
    head=List.rotate(List.head,3);
    console.log("reversed list : ")
    List.print(head)
  