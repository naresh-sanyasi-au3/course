function merg(arr1, arr2){
    let i = 0
    let j = 0
    let result = []

    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }
        else{
            result.push(arr2[j])
            j++
        }
    }
    while(j<arr2.length){
        result.push(arr2[j])
        j++
    }
    while(i<arr1.length){
        result.push(arr1[i])
        i++
    }
    return result
}
function mergesort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = mergesort(arr.slice(0,mid))
    let right = mergesort(arr.slice(mid))
    return merg(left, right)
}
console.log(mergesort([1,4,7,2,4,8,13,14]))