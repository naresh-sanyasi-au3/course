function nextletter(string){
    var newString = ' '
     var letters = 'abcdefghijklmnopqrstuvwxyz'
for(var i=0; i<string.length; i++ ){
    var char = string.charAt(i)
    if(char =='z'){
        newString = newString + 'a'
    }
    else{
        newString = newString + letters.charAt(letters.indexOf(char)+1)
    }
}
return newString
}
console.log(nextletter("kartik"))
console.log(nextletter("naresh"))
console.log(nextletter("umesh"))



