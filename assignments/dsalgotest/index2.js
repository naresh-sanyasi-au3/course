// Coding challenge #2
// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
// Note: You may not slant the container and n is at least 2.
// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.



function maxAreaOfwater(array){
    let maxArea = 0
    let left = 0
    let right = array.length - 1
    while (left < right){
      maxArea = Math.max(maxArea, Math.min(array[left], array[right]) * (right - left))
      if (array[left] > array [right])
        right--
      else 
        left++
    }
    return maxArea
  }
  console.log(maxAreaOfwater([1, 8, 6, 2, 5, 4, 8, 3, 7]))