function powersum(exp){

    let res = Math.pow(2, exp)
    let sum = 0

    while(res){
        let rem = res % 10
        sum += rem
        res = (res - rem)/10
    }
    return sum
}
console.log(powersum(3))
console.log(powersum(4))
console.log(powersum(15))