function minimumNumberOfJumps(array) {

    let min = 0;
    let max = 0;
    let currentEnd = 0;
  
    if (array.length == 1) 
      return 0;
  
    if (array[0] == 0)
      return -1;
  
    for (let i = 0; i < array.length - 1; i++) {  
      max = Math.max(i + array[i], max);
      if (currentEnd == i) {
        min++;
        currentEnd = max;
      }
    }
    
    if (min == 0)
      return -1;
    else
      return min;
  }
  
  console.log(minimumNumberOfJumps([2, 3, 1, 1, 4]));