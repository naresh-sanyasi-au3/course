const IqTest = (str) => {

    let number = str.split(' ').map(x => x % 2)

    let sum = number.reduce((a, b) => a + b)

    let target = sum > 1 ? 0 : 1
  
    return number.indexOf(target) + 1
  }
  
  console.log(IqTest("2 4 7 8 10"))
  console.log(IqTest("1 2 1 1"))
  