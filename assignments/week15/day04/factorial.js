function fact(n){
    if(n<0) return 0
    if(n<=1) return 1

    return n*fact(n-1)
    
}
console.log(fact(5))