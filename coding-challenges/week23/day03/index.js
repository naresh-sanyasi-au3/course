const XO = (str) => {

    str = str.toLowerCase()
  
    let arrayChar = str.split("")
  
    let countX = arrayChar.reduce((acc, val) => acc + (val === 'x'), 0)
  
    let countO = arrayChar.reduce((acc, val) => acc + (val === 'o'), 0)
  
    if (countX === countO)
      return true
    else
      return false
  
  }
  
  console.log(XO("ooxx"))
  console.log(XO("xooxx"))
  console.log(XO("ooxXm"))
  console.log(XO("zpzpzpp"))
  console.log(XO("zzoo"))