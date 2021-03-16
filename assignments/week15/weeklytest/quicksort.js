function quicksort(array) {
      if (array.length <= 1) return array;
      else {
        let left = [];
        let right = [];
        let newArray = [];
        let pivot = array.pop(); 
        for (let i = 0; i < array.length; i++) {
          if (array[i].length === pivot.length) {
            left.push(array[i]);
          }
          else if (array[i].length < pivot.length) {
            left.push(array[i]);
          } else {
            right.push(array[i]);
          }
        }
        return newArray.concat(quicksort(left), pivot, quicksort(right));
      }
    }
    console.log(quicksort(["ab", "cd", "e", "j", "asd", "ljffg", "df"]))
    console.log(quicksort([4, 4, 6, 8, 89, 41, 12]))