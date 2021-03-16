function permutation(str) {
    let arr = []
    getArray = (temp, length, char) => {
      if (length === str.length) {
        arr.push(temp)
        return
      }
      if (!'1234567890'.includes(char)) {
        getArray(temp + char.toUpperCase(), length + 1, str[length + 1])
      }
      getArray(temp + char.toLowerCase(), length + 1, str[length + 1])
    }
    getArray('', 0, str[0])
    return arr
  }
  
  console.log(permutation("ad52"))
  console.log(permutation("ab7c"))
  
  
  