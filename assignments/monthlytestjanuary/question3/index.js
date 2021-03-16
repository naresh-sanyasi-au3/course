// 3-  Write a function that would allow you to do this.
// 	add(3)(3)  and add(3,3)  // return 6
// 	add(3)(8)  and add(3,8)  // return 11

function add(a){

    return function(b){
        
        return a + b
    }
}
console.log(add(3)(3))
console.log(add(3)(8))