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

    addfirst(val){
        this.head = new Node(val, this.head)
        if(!this.tail){
            this.tail = this.head
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

list.addfirst(1)
list.deletefirst(1)
list.print()