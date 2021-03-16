function findNextSquare(square){
    var root;
    var root1;
    if(Math.sqrt(square) % 1 === 0){
         root = Math.sqrt(square)
         root1 = root+1
    }else{
        return -1;
    }
    return root1 * root1;
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(114))
