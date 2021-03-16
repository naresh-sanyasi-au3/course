function happyNumber(num) 
{
    var m
    var n 
    var out = [] 
 
    while(num != 1 && out[num] !== true) 
    {
        out[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    return (num === 1) ;
}
console.log(happyNumber(27))
console.log(happyNumber(23))

