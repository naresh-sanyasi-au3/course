// We need to remove the given element and shift the rest of the elements.
// Initialize index at 0
// Fill all the elements except the input number while increasing the index
// Remarks:
// O(1) space complexity
// O(n) time complexity

// https://leetcode.com/problems/remove-element/

 let removeElement = (array, val)=>{

     for (let i=0; i<array.length; i++){
         if(array[i] == val){
             array.splice(i,1)
             i--
         }
     }
     return array
 }
 console.log(removeElement([1,2,3,4,5], 4))