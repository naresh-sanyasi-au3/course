function countandsay(n) {
    if (n < 1 || n > 30) return "out of range";
    let current = "1";
    for (let k = 2; k <= n; k++) {
        let next = ""
        for (let i = 0; i < current.length;) {
            let count = 1
            while (current[i] == current[i + count]) count++
            next += count + current[i]
            i = i + count

        }
        current = next

    }
    return current
}
console.log(countandsay(2))
console.log(countandsay(4))
console.log(countandsay(33))