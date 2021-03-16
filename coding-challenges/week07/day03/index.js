function pangram(str) {
    var start = 'a'
    var end = 'z'
    var aCode = start.charCodeAt()
    var zCode = end.charCodeAt()
    var miss = ''
    for (var i = aCode; i <= zCode; i++) {
        var char = String.fromCharCode(i)
        if (str.toLowerCase().indexOf(char) == -1) {
            miss = miss + char
        }
    }
    return miss
}
console.log(pangram("The quick brown fox jumps"))