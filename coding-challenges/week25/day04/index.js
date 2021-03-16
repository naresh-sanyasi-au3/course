const removeSmallest = (num) => {

    if (num.length === 0) return num
  
    if (num.length > 1){

      let indexOfSmallest = num.indexOf(Math.min(...num))

      num.splice(indexOfSmallest, 1)
      
      return num
    }
  }
  
  console.log(removeSmallest([1, 2, 3, 4, 5]))
  console.log(removeSmallest([5, 3, 2, 1, 4]))
  console.log(removeSmallest([2, 2, 1, 2, 1]))