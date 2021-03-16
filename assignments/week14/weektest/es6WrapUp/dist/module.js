"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sort;

function sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var swapped = false;

    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}