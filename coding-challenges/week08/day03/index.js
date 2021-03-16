function largest(arr) {
    var largest = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

function lowest(arr) {
    var lowest = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i]
        }
    }
    return lowest
}
console.log(largest([2, 5, 8, 6, 9, 0]))
console.log(lowest([2, 5, 8, 6, 9, 0]))