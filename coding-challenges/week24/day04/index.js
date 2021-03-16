const strConvert = (str) => {

    str = str.toLowerCase()
    let output = ""

    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === str.lastIndexOf(str[i]))
        output += "("
      else 
        output += ")"
    }
    return output
  }
  console.log(strConvert("din"))
  console.log(strConvert("recede"))
  console.log(strConvert("Success"))
  console.log(strConvert("(( @"))