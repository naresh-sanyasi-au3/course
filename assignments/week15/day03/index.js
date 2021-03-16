const selectionsort = arr => {
    for(let i=0; i<arr.length; i++){
        let min = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
    }
    if(min != i){
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
}
return arr

}
console.log(selectionsort([3,6,4,15,34,1,17,23]))
console.log(selectionsort([-3,6,4,15,-34,1,0,17,23]))