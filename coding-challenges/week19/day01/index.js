function contiguousSum(arr, k){
    if(k>arr.length) return "invalid length"
    let maxSum = 0
    for (let i = 0; i < k; i++) {
        maxSum += arr[i]
    }

    let nextSum = maxSum
    for (let i = k; i < arr.length; i++) {
        nextSum = nextSum - arr[i-k] + arr[i]
        maxSum = Math.max(nextSum, maxSum)
    }
       return maxSum 
    }
console.log(contiguousSum([2, 3, 4, 1, 5],2))
console.log(contiguousSum([2, 1, 5, 1, 3, 2],3))
