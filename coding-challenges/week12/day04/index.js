function fizzbuzz() {
    for (let i = 0; i <= 15; i++) {
        if (i % 3 == 0) {
            let str = "fizz"
            if (i % 5 == 0) str += "buzz"
            console.log(str)
        }
        else if (i % 5 == 0) {
            console.log("buzz")
        }
        else {
            console.log(i)
        }
    }
}
console.log(fizzbuzz())                  