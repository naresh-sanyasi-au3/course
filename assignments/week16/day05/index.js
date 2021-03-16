class Heap{
    constructor(){
       this.heap = []
   }
   add(value){
       this.heap.push(value)
       this.heapifyUp()
   }
   heapifyUp(){
       let currentIndex = this.heap.length-1
      while(currentIndex>0){
       let parentIndex = Math.floor((currentIndex-1)/2)
       if(this.heap[currentIndex]> this.heap[parentIndex]){
           this.swap(currentIndex, parentIndex)
           
       }
       else{
         break
       }
       currentIndex = parentIndex
      }
   }
   remove(){
       console.log("remove:" , this.heap[0])
       if(this.heap.length ===0)
       return null
       if(this.heap.length ===1)
       return this.heap.pop()

       this.heap[0] = this.heap.pop()
       this.heapifyDown()
   }
   heapifyDown(){
       let currentIndex = 0
       let indexToSwap

         while(currentIndex < this.heap.length - 1){
       let leftChildIndex = 2*currentIndex +1
       let rightChildIndex = 2*currentIndex +2
         
           if(rightChildIndex <= this.heap.length-1 && this.heap[leftChildIndex] > this.heap[rightChildIndex])
           indexToSwap = leftChildIndex
           else
           indexToSwap = rightChildIndex

          if(this.heap[currentIndex] < this.heap[indexToSwap])
           this.swap(currentIndex, indexToSwap)
           else
           break;
           currentIndex = indexToSwap
           }
   }
   printHeap(){
     this.heap.forEach(val => console.log(val))
     console.log("done printing")
     
   }
   swap(i,j){
       let temp = this.heap[i]
       this.heap[i]= this.heap[j]
       this.heap[j] = temp
   }
   }
   let heapObj = new Heap()
   heapObj.add(27)
   heapObj.add(15)
   heapObj.add(24)
   heapObj.add(9)
   heapObj.add(13)
   heapObj.add(7)
   heapObj.add(3)
   heapObj.remove()
   heapObj.remove()
   heapObj.printHeap()
//    [27, 15, 24, 9, 13, 7, 3]