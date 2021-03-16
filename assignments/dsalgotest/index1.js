// Coding challenge #1
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
// Example:
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]





function letterCombinations(digits) {
    let result = [""]
    let letterMap = {
      "1": [],
      "2": ['a', 'b', 'c'],
      "3": ['d', 'e', 'f'],
      "4": ['g', 'h', 'i'],
      "5": ['j', 'k', 'l'],
      "6": ['m', 'n', 'o'],
      "7": ['p', 'q', 'r', 's'],
      "8": ['t', 'u', 'v'],
      "9": ['w', 'x', 'y', 'z']
    }
    if (digits.length == null) return []
    for (num of digits){
      result = permutations(result, letterMap[num])
    }
    return result
  }
  function permutations(array, newChar){
    let newArray = []
    for (x of newChar) {
      for (y of array) {
        newArray.push(y + x)
      }
    }    
    return newArray
  }
  console.log(letterCombinations("23"))