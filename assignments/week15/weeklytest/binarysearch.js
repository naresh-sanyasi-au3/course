function binarysearch(arr, val) {
  let start = 0;
  let end  = arr.length - 1;
  let middle;
  while (start <= end) {
    middle  = Math.floor((start + end) / 2);
    if (arr[middle] == val) return middle;
    else if (arr[middle] < val) {
      start = middle + 1;
    } else {
      end = middle -1 ;
    }
  }
  return - 1;
}
function countno(arr, val) {
  let index = binarysearch(arr, val);
  if (index == -1) return 0;
  let count = 1;
  let left = index - 1;
  while (left >= 0 && arr[left] == val) {
    count += 1;
    left -= 1;
  }
  let right = index + 1;
  while (right < arr.length && arr[right] == val) {
    count += 1;
    right += 1;
  }
  return count;
}
console.log(countno([2, 5, 5, 5, 6, 6, 7], 5));
console.log(countno([2, 5, 5, 5, 6, 6, 7], 6));
console.log(countno([2, 5, 5, 5, 6, 6, 7], 7));