function reverse(num) {
    let places = 1 / 10
    let temp = num
    while (temp != 0) {
        places *= 10
        let rem = temp % 10
        temp -= rem
        temp /= 10
    }
    let unit = places
    let out = 0
    while (num != 0) {
        let rem = num % 10
        out += rem * unit;
        [num, unit] = [(num - rem) / 10, unit / 10]
    }
    return out
}
console.log(reverse(123));
console.log(reverse(120));
