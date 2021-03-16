function hist(array){
    let map = {}
    for(let i=0; i<array.length; i++){
        const element = array[i];
        if(map[element]){
            map[element]++
        }
        else{
            map[element]=1
        }
    }
    return map
}
console.log(hist([2,2,2,2,4,5,6,6,7,9,9,9]));
console.log(hist(["Ansal","Vaibhab", "Divyam","dwark","Divyam"]));