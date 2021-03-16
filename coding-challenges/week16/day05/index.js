function shiftzero(array){
let count = 0
for (let i = 0; i < array.length; i++) {
    const element = array[i]

    if(element !== 0){
        array[count] = element
        count++
    }
}
while (count<array.length) {
    array[count++] = 0
}
return array
}
console.log(shiftzero([1,9,5,4,0,2,0,3,0,67,0]))