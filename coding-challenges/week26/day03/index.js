function accum(string){
    var count = 1
    var newstring = ""
    
    for( let i = 0; i < string.length; i++){
      
      newstring += string[i].toUpperCase()
      
      for(let j = 1; j < count; j++){
        newstring += string[i].toLowerCase()
      }
      
      count++
      
      if(i != (string.length - 1)){
        newstring += '-'
      }
    }
    
    return newstring
  }
  
  console.log(accum("abcd"))
  console.log(accum("RqaEzty"))
  console.log(accum("cwAt"))