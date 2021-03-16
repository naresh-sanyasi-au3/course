const NonDuplicate = (array) => {

    let obj = {}
  
    for (let num of array){
      if (!obj[num]) 
        obj[num] = 1
      else
        delete obj[num]
    }
  
    return Object.keys(obj).map(e => e-0);
  }
  
  console.log(NonDuplicate([1, 4, 2, 1, 3, 5, 6, 2, 3, 5]))