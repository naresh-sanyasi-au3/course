function binarysearch(arr, val){
    let left = 0
    let right = arr.length-1

    while(left <= right){
        let mid = Math.floor((left + right)/2)
        if(arr[mid] === val) return mid
        if(arr[mid] < val){
            left = mid+1
        }
        else{
            right=mid-1
        }

    }
    return -1
}
console.log(binarysearch([1,3,5,6,7,9,], 6))
console.log(binarysearch([1,3,5,6,7,9,], 3))
