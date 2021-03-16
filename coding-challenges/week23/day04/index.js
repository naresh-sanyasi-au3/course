const oneBits = (num) => {

    let bin
    if (num >= 0) 
      bin = num.toString(2)
  
    let count = 0
  
    for (let i = 0; i < bin.length; i++) {
      if (bin[i] == 1)
        count++
    }
    return count
  }
  
  console.log(oneBits(1234))