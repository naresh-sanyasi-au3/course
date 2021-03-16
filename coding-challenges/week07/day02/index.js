function fact(number){

    if(number==0){
        return 1
    }
     else {
        return number*fact(number-1)
    }
}
console.log(fact(0))
console.log(fact(1))
console.log(fact(4))
console.log(fact(6))