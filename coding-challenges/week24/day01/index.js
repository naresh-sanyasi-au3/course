const countDuplicates = (str) => {

    let strLowerCase = str.toLowerCase()
    let resultObj = {}
    let count = 0
  
    for (let i = 0; i < strLowerCase.length; i++){
  
      if (!resultObj[strLowerCase[i]])
        resultObj[strLowerCase[i]] = 1
  
      else if (resultObj[strLowerCase[i]] < 2){
        resultObj[strLowerCase[i]] +=1
        count++
      }
    }
    return count++
  }
  
  console.log(countDuplicates("abcde"))
  console.log(countDuplicates("aabbcde"))
  console.log(countDuplicates("aabBcde"))
  console.log(countDuplicates("indivisibility"))
  console.log(countDuplicates("Indivisibilities"))
  console.log(countDuplicates("aA11"))
  console.log(countDuplicates("ABBA"))