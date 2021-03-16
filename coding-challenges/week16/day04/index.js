function binarysearch(array,low, high, item){

    if(low > high) return -1
    const mid = Math.floor((low + high) / 2)

    if(array[mid==item]) return mid

    if(array[low]<=array[mid]){

        if(item >= array[low] && item <= array[mid])
        return binarysearch(array, low, mid-1, item)
        else
        return binarysearch(array, mid+1, high, item)

    }
    else{

        if(item >= array[mid] && item <= array[high])
        return binarysearch(array, mid+1, high, item)
        else
        return binarysearch(array, low, mid-1, item)

    }
}
console.log(binarysearch([1,3,5,7,8,9], 7,5,4))
