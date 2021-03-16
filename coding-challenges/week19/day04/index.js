function removeDuplicate(array){
    let nextNonDuplicate = 1
    let i = 1
    while(i < array.length){
        if(array[nextNonDuplicate -1] !== array[i]){
            array[nextNonDuplicate] = array[i]
            nextNonDuplicate++
            
        }
        i++
    }
    return nextNonDuplicate
}
console.log(removeDuplicate([2, 3, 3, 3, 6, 9, 9]))
// console.log(removeDuplicate([2, 2, 2, 11,5,5]))