function searchArray() {
    var a = prompt("Enter array");
    var array = a.split("");
    var b = prompt("Enter a number to search");
    for (var i=0; i<=array.length; i++){
      if(array[i]==b){
        return i;
      }
      }
      return -1;
}
searchArray();