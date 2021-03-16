let bubbleSort = array => {
    for(let i = 0; i<array.length; i++){
        for(let j=array.length-1; j>=i; j--){
        if(array[j] < array[j-1]){
    [array[j],array[j-1]]=[array[j-1],array[j]]
        }
    }
}
    return array
}
console.log(bubbleSort([5,9,6,4,7,2,3,1,8]));
console.log(bubbleSort([11,9,0,4,8,2,1,8,8]));