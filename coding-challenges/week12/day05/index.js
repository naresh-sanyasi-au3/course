function commonArray(arr1, arr2) {
    let arrMap = {}
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];

        if (arrMap[element] == undefined) {
            arrMap[element] = 1
        }
    }
    let output = []
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];

        if (arrMap[element]) {

            output.push(element)
        }
    }
    return output;
}
console.log(commonArray([1, 5, 7, 3, 4], [1, 2, 4, 3]))
console.log(commonArray([3, 2, 7, 6, 4], [1, 2, 7, 6]))