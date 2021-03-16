function pallindrom(string) {
    var firstIndex = 0
    var lastIndex = string.length - 1
    while (firstIndex < lastIndex) {
        if (string.charAt(firstIndex) != string.charAt(lastIndex)) {
            return false
        }
        firstIndex++
        lastIndex--
    }
    return true
}
console.log(pallindrom("kayak"))
console.log(pallindrom("madam"))
console.log(pallindrom("malayalam"))
console.log(pallindrom("naresh"))
