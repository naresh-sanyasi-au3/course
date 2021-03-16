const sortStr = (str) => {

    if (str == "")
      return (`""`)
  
    let result = [];
    let numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    str = str.split(" ")
  
    for (let i = 0; i < numArray.length; i++) {
      for (let j = 0; j < str.length; j++) {
        if (str[j].includes(numArray[i]))
          result.push(str[j])
      }
    }
    return result.join(" ")
  }
  
  console.log(sortStr("is2 Thi1s T4est 3a"))
  console.log(sortStr("4of Fo1r pe6ople g3ood th5e the2"))
  console.log(sortStr(""))