function bubblesort(arr1, arr2, k) {
      for (let i = 0; i < arr1.length; i++) {
        for (let j = i; j < arr1.length; j++) {
          if (arr1[i] > arr1[j]) {
            [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
            [arr2[i], arr2[j]] = [arr2[j], arr2[i]];
          }
        }
      }
      let sum = 0;
      for (let i = k - 1; i < arr1.length; i++) {
        sum += arr1[i];  
      }
      return sum;
     }
     console.log(bubblesort([2, 3, 9, 4, 5], [3, 5, 11, 6, 7], 3));