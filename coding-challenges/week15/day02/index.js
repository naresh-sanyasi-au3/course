function removeDuplicate(array){
    var removedarray = []

    for(i=0; i < array.length; i++){
        if(removedarray.indexOf(array[i]) == -1) {
            removedarray.push(array[i])
            // removedarray.pop(array[i])
        }
    }
    return removedarray
}

console.log(removeDuplicate([1, 2, 2, 3, 4, 5, 6, 6, 7]))
console.log(removeDuplicate([1, 1, 2]))