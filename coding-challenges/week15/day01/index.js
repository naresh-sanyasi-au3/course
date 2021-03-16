function missingnumber(arr){
    let out = []
    arr.reduce((prev, curr) => {
        while(curr != prev+1) out.push(++prev)
        return curr
    })
    return out
}
console.log(missingnumber([1,2,4,6,7,9,11,14,15]))