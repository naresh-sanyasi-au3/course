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
    addmiddle(val, elementtosearch){
        let current = this.head
        while(current){
            if(current.value == elementtosearch){
                current.next = new Node(val, current.next)
            }
            current = current.next
        }
    }
    deletefirst(){
        if(!this.head){
            return null
        }
        this.head = this.head.next
    }
    deleteend(){
        if(!this.head){
            return null
        }
        let current = this.head
        while(current.next.next){
            current = current.next
        }
        current.next = null
        this.tail = current
    }
    deletemiddle(elementtosearch){
        if(!this.head){
            return null
        }
        if(this.head.value == elementtosearch){
            this.head = this.head.next
        }
        let current = this.head
        while(current.next){
            if(current.next.value == elementtosearch){
                if(this.tail == current.next){
               this.tail = current
            }
                current.next = current.next.next
                break
        }
        current = current.next
    }
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
list.addend(2)
list.addend(3)
list.addmiddle(4,2)
list.deletefirst()
list.deleteend()
list.deletemiddle() 
list.print()