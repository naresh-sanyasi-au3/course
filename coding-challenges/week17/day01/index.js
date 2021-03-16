function maxtwo(array){
    
let max = -Infinity
let secondmax = -Infinity

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element > max){
        secondmax = max
        max = element
    }
    else if(element>secondmax){
        secondmax = element
    }
}
return array.filter(item => item < secondmax)
}
console.log(maxtwo([2,8,7,1,5]))