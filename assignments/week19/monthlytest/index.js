// Given a string, find the length of the longest substring which has no repeating characters.
// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring without any repeating characters is "abc".
// Input: String="abbbb"
// Output: 2
// Explanation: The longest substring without any repeating characters is "ab".
// Input: String="abccde"
// Output: 3
// Explanation: Longest substrings without any repeating characters are "abc" & "cde".

function removeDuplicate(str){

    var removeItem = []
    var countarray 
    

    for(i=0; i < str.length; i++){

        if(removeItem.indexOf(str[i]) == -1) {
            
            removeItem.push(str[i])
            countarray = removeItem.length

        }
    }
    return countarray
}

console.log(removeDuplicate("abbbb"))
console.log(removeDuplicate("aabccbb"))
