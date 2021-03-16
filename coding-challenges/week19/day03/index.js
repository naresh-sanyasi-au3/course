function pair(array, num){

    var resultleft
    var resultright
    
    let left = 0;
    let right = array.length - 1
  
    while (right > left) {
      if (array[left] + array[right] === num) {
        resultleft = left
        resultright = right
      }
      if (array[left] + array[right] > num) 
        right--
      else 
        left++
    }
    return [resultleft, resultright];
  }
  
  console.log(pair([1, 2, 3, 4, 6], 6));
  console.log(pair([2, 5, 9, 11], 11));