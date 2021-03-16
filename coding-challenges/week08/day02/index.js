function pattern(n) {
    var line = ''
    for (var row = n; row >= 1; row--) {
        for (var col = 1; col <= n; col++) {
            if (col <= row - 1) {
                line = line + ' '
            }
            else {
                line = line + '* '
            }
        }
        line = line + '\n'
    }
    return line
}
console.log(pattern(5))
console.log(pattern(10))