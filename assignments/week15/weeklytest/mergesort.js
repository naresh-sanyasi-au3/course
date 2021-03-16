// function mergesort(arr) {
//       if (arr.length <= 1) {
//         return arr;
//       }
//       const middle = Math.floor((arr.length) / 2)
//       const arr1 = arr.slice(0, middle)
//       const arr2 = arr.slice(middle, arr.length);
//       return merge(mergesort(arr1), mergesort(arr2))
//     }
//     function merge(arr1, arr2) {
//       let result = [];
//       while (arr1.length && arr2.length) {
//         let min
//         if (arr1[0].length === arr2[0].length) {
//           min = arr1.shift()
//         }
//         else if (arr1[0].length < arr2[0].length)
//           min = arr1.shift()
//         else
//           min = arr2.shift()
//         result.push(min)
//       }
//       if (arr1.length) result = result.concat(arr1)
//       if (arr2.length) result = result.concat(arr2)
//       return result;
//     }
//     console.log(mergesort([4, 4, 6, 8, 89, 41, 12]))

// const bubblesort = (arr) =>{
//   for (let i=0; i<arr.length-1; i++){
//     for (let j=0; j<arr.length-i-1; j++){
//       if(arr[j] > arr[j+1]){
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
  
// }
// console.log(bubblesort([2,5,9,6,4,5,4,7]))

// function bubblesort(arr){
//   for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length; j++){
//       if(arr[j] > arr[j + 1]){
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//       }
//     }
//   }
//   return arr
// }
// console.log(bubblesort([1,8,5,7,4,6,11]))
function countingSort(arr, min, max)
  {
    var i, z = 0, count = [];
 
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
 return arr;
}
var arra = [3, 0, 2, 5, 4, 1]; 
console.log(countingSort([3, 0, 2, 5, 4, 1], 2, 5));