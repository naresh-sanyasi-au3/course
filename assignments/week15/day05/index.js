const swap= (arr, ind1, ind2)=>{
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
}
function pivot(arr, start=0, end=arr.length-1){
    let pivot = arr[start]
    let swapindex = start
    for (let i = start+1; i <= end; i++){
        if(arr[i] < pivot){
            swapindex++
            swap(arr, i, swapindex)
        }     
    }
    swap(arr, start, swapindex)
    return swapindex
}
function quicksort(arr, left=0,right=arr.length-1){
    if(left<right){
        let pivotindex = pivot(arr, left, right)
        quicksort(arr, left, pivotindex-1)
        quicksort(arr, pivotindex+1, right)
    }
    return arr
}
console.log(quicksort([5,2,7,5,3,9,7]))
