function power(num) {

    while (num > 1) {

        num = num / 2
        console.log(num)
    }

    if (num == 1)
        return true
    else
        return false
}
console.log(power(6))
console.log(power(32))
console.log(power(0))
console.log(power(1))
console.log(power(6))

