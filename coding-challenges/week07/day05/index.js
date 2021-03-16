function binDeci(dividend) {
    var output = ' '
    var remainder
    while (dividend > 1) {
        remainder = dividend % 2
        output = remainder + output
        dividend = (dividend - remainder) / 2
    }
    return dividend + output
}
console.log(binDeci(2))
console.log(binDeci(1))
console.log(binDeci(8))
console.log(binDeci(0))