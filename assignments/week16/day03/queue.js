class Node{
    constructor(val, next=null){
        this.value = val
        this.next = next
    }
}

class singlelinklist{
    constructor(){
        this.head = null
        this.tail = null
    }
    addend(val){
        if(this.tail){
            this.tail.next = new Node(val)
            this.tail = this.tail.next
        }
        else{
            this.tail = new Node(val)
            this.head = this.tail
        }
    }
    deletefirst(){
        if(!this.head){
            return null
        }
        this.head = this.head.next
    }
    print(){
        while (this.head){
            console.log(this.head.value)
            this.head = this.head.next
        }
    }

}
var list = new singlelinklist()

list.addend(2)
list.addend(3)
list.addend(4)
list.addend(5)
list.deletefirst()
list.print()