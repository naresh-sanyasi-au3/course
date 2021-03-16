function anagram(string1, string2) {

    if (string1.length !== string2.length) {
        return false
    }
    for (var i = 0; i < string1.length; i++) {
        var char = string1.charAt(i)
        var foundIndex = string2.indexOf(char)
        if (foundIndex == -1) {
            return false
        }
        else {
            string2 = string2.substring(0, foundIndex) + string2.substring(foundIndex + 1, string2.length)
        }
    }
    return true


}
console.log(anagram("aabb", "bbaa"))
console.log(anagram("aacb", "bbaa")) 