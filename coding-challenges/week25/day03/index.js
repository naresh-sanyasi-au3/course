const bracesValidation = (braces) =>{
 
    const stack = []
  
    for (const brace of braces){
      if (')]}'.includes(brace)){
        if (isMatchedBraces(stack.pop(), brace)){
          continue
        }
        return false
      }
      stack.push(brace)
    }
    return !stack.length
  }
  
  const isMatchedBraces = (left, right) =>{

    return ['()', '[]', '{}'].some(([l, r]) => l === left && r === right)
  }
  
  console.log(bracesValidation("(){}[]"))
  console.log(bracesValidation("([{}])"))
  console.log(bracesValidation("(}"))
  console.log(bracesValidation("[(])"))
  console.log(bracesValidation("[({})](]"))