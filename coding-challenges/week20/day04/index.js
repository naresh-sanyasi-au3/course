function corruptPairPattern(array){

    let out = []
    for (let i = 0; i < array.length; i++){
  
      if (array[Math.abs(array[i]) - 1] > 0){
        array[Math.abs(array[i]) - 1] = - array[Math.abs(array[i]) - 1]
      }
      else
        out.push(Math.abs(array[i]))
    }

    for (let i = 0; i < array.length; i++){
      if (array[i] > 0) 
        out.push(i + 1)
    }
    return out
  }
  
  console.log(corruptPairPattern([3, 1, 2, 5, 2]))
  console.log(corruptPairPattern([3, 1, 2, 3, 6, 4]))
  