// 2- Write a function that would allow you to do this.
// 	Const addSix = createBase(6);
// 	addSix(10) // return 16
// 	addSix(11) // return 17


function createBase(baseNum){
    return function(Num){
      
      return Num + baseNum
    }
  }
  
const addSix = createBase(6)


  console.log(addSix(10))
  console.log(addSix(11))

