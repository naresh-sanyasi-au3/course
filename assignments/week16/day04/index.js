class hashtable{
    constructor(size){
        this.keyMap = new Array(size)
    }
    hash(key){
        let total = 0
        let primenum = 31
        for (let i = 0; i < key.length; i++) {
            let value = key[i].charCodeAt(0)-96
            total = (total*primenum+value) % this.keyMap.length
            
        }
        return total
    }
   set(key, value){
       let index = this.hash(key)
       if(!this.keyMap[index]){
           this.keyMap[index] =[]
       }
       this.keyMap[index].push([key, value])
    }
   get(key){
       let index = this.hash(key)
       if(this.keyMap[index]){
           for (let i = 0; i < this.keyMap[index].length; i++) {
               if(this.keyMap[index][i][0]==key){
                   return this.keyMap[index][i][1]
               }
           }
       }
       return undefined
       }
    delete(key){
        let index = this.hash(key)
        if(this.keyMap[index]){
            for (let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0]==key){
                    this.keyMap[index].splice(i,1)
                    return this.keyMap
                }
            }
        }
        return undefined
    }
   } 

   let ht = new hashtable(7)

   ht.set("maroon", "#800000")
   ht.set("yellow", "#800001")
   ht.set("green", "#800002")
   ht.set("red", "#800003")
   ht.set("white", "#800005")
   ht.set("black", "#800004")
   ht.set("orange", "#800006")

