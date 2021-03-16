function smallestSub(array, S){

    let n = array.length
    let sum = 0
    let sublen = n+1
    let start = 0
    let end = 0

    while(end<n){
        while(sum < S && end < n){
            sum += array[end]
            end++
        }
        while (sum >= S && start < n) {
            if(end - start < sublen){
                sublen = end - start
            }
            sum -= array[start]
            start++
            
        }

    }
    return sublen > n ? 0 : sublen
    
}
console.log(smallestSub([2, 1, 5, 2, 8], 7))
console.log(smallestSub([2, 1, 5, 2, 3, 2], 7))