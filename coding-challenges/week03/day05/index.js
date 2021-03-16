function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
}
var arr1 = [1, 8, 4];
var arr2 = [1, 2, 4];
var arr3 = [1, 8, 4];
var arr4 = [1, 8, 4];
console.log(compareArrays(arr1, arr2))
console.log(compareArrays(arr3, arr4))