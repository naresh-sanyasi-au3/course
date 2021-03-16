

var removeElement = function(nums, val) {
    const len = nums.length;
    for(let i = 0; i < len; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length
};





var generate = function(numRows) {
    if (numRows === 0) {
        return []
    } else if (numRows === 1) {
        return [[1]]
    }
    
    return pascals(numRows)
};

const pascals = numRows => {
    let triangle = [[1]]
    
    for(let i = 1; i < numRows; i++) {
        const row = [1]
        for(let j = 1; j < triangle[i-1].length; j++) {
            row.push(triangle[i-1][j-1] + triangle[i-1][j])
        }
        row.push(1)
        triangle.push(row)
    }
    return triangle
}
var twoSum = function(nums, target) {
    const map = {};
    
    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    
    for(let j = 0; j < nums.length; j++) {
        const diff = Math.abs(target - nums[j])
        if(map[diff]) {
            return [j, [map[diff]]]
        }
    }
};
// does not work for negative integers"

var majorityElement = function(nums) {
    if(nums.length == 1) {
        return nums[0]
    }
    const map = {}
    let max;
    let largest = 1
    for(let element of nums) {
        if(!map[element]) {
            map[element] = 1;
        } else {
            map[element]++;
        }
    }
    
    for(let key in map) {
        if(map[key] > largest) {
            largest = map[key]
            max = key
        }
    }
    
    return max;
};
var plusOne = function(digits) {
    const len = digits.length - 1
    for(let i = len; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i]++
            return digits;
        } else {
            digits[i] = 0
        }
        
    }
    digits.unshift(1)
    return digits
};

// ,
// "We need to remove the given element and shift the rest of the elements.
// Initialize index at 0
// Fill all the elements except the input number while increasing the index
// Remarks:
// O(1) space complexity
// O(n) time complexity

// https://leetcode.com/problems/remove-element/"
// "We have a sorted array as input and we need to search for occurrences of an element. Search in a sorted array can be easily done using binary search. We need to modify the search slightly to fit our purpose.
// Implement a search which would give the last index of element being searched
// Call the above method twice for given target and target-1
// Handle case where target is not present and cases where target is at either end of the array
// Remarks:
// O(log n) time complexity for using the binary search
// O(n) space complexity as 2 copies of arrays are created for each call to the binary search function

// https://medium.com/@rachit.slt/leetcode-search-for-a-range-753ae1765318



// "
// "Search Insert Position
// Given a sorted list and a value, we need to find the index where it should be inserted or return the index at which it is already present. Searching in a sorted list should always be done using binary search. The steps are listed below
// Find the middle element of the list
// If value matches with target then return the index
// If value is greater than target, we need to search the left half
// Otherwise we need to search the right half
// To code the above logic
// Use pointers low and high to define the range of search
// Initialize low with 0 and high with length of array
// Initialize mid with average of low and high
// To search in left half move high pointer to mid and recalculate mid
// To search in right half move the left pointer to mid and recalculate mid
// Continue till mid equals low at which point further iterations will keep on pointing mid to low
// Remarks
// O(log n) time complexity for using divide and conquer technique
// O(1) space complexity as only 3 additional variables are used
// Integer overflow is prevented by using the expression (high-low) instead of (high+low). This is not applicable to python as python converts int to long as per the need.
// The result of low+(high-low)/2 will never be equal to high, it can at most reach high-1. Hence we initialize high with length of list to reach the last valid index which is one less than the length of list


// Search Insert Position
// Given a sorted list and a value, we need to find the index where it should be inserted or return the index at which it is already present. Searching in a sorted list should always be done using binary search. The steps are listed below
// Find the middle element of the list
// If value matches with target then return the index
// If value is greater than target, we need to search the left half
// Otherwise we need to search the right half
// To code the above logic
// Use pointers low and high to define the range of search
// Initialize low with 0 and high with length of array
// Initialize mid with average of low and high
// To search in left half move high pointer to mid and recalculate mid
// To search in right half move the left pointer to mid and recalculate mid
// Continue till mid equals low at which point further iterations will keep on pointing mid to low
// Remarks
// O(log n) time complexity for using divide and conquer technique
// O(1) space complexity as only 3 additional variables are used
// Integer overflow is prevented by using the expression (high-low) instead of (high+low). This is not applicable to python as python converts int to long as per the need.
// The result of low+(high-low)/2 will never be equal to high, it can at most reach high-1. Hence we initialize high with length of list to reach the last valid index which is one less than the length of list


// https://leetcode.com/problems/search-insert-position/






// "
// "We have already seen how to search for an element in a sorted array. A rotated array will simply have an increasing sequence for till the highest element and then a drop followed by another increasing. To search in this array we can simply find the minimum element and search in the point at which the highest element and search for the element in either the left or right side of it.
// We can identify the pivot element by comparing it to its neighbors. Both of them would be greater than it. So first we perform a binary search to find an element which satisfies this.
// Find middle element of the list and compare it with its neighbors
// If left is lower and right is higher we are in the ascending section of the list and the pivot is towards the smaller side i.e. left, otherwise it is to the right
// For moving left, move the high pointer to mid
// For moving right, move the left pointer to mid
// Once we find the pivot, we can do a search on first element to pivot if the target lies in that range otherwise on pivot to last element.
// Remarks:
// O(log n) + O(log n) time complexity, for performing the binary search twice
// O(1) space complexity as no new copies of the existing arrays are created

// https://leetcode.com/problems/search-in-rotated-sorted-array/

// "
// "Let’s analyse the input first, we have an unsorted array of integers and we are not allowed to change the order. So our only option is traversing the array. Now we need to find a contiguous sequence satisfying some property. This can be done by checking sequences of all size starting at each point or alternatively ending at each point. Checking for sequences of all sizes would use O(n²) time complexity.
// To optimize we need to avoid checking for all sequences and use the results of previous sequences to calculate the result for current sequence
// Traverse the array from left to right and keep track of maximum sum at each element
// To do that, check the maximum sum at previous element and add the current element to it if it makes the sum larger or just use the current element
// Keep track of the maximum sum obtained at each element
// Remarks:
// O(1) space complexity as constant number of variables are being used
// O(n) time complexity for traversing the array once
// Using result of previous element to find result of current element, you will see this pattern in a lot of places


// https://leetcode.com/problems/maximum-subarray/

// "
// "For each 0 in the matrix the corresponding row and column needs to be set 0.
// Iterate over the matrix and mark the row and column wherever a 0 is encountered.
// Iterate over the matrix again and set the element whose row or column is marked
// Remarks:
// O(2*m*n) time complexity for traversing the matrix twice.
// O(m+n) space complexity for using sets of size m and n
// By using sets we can avoid checking for duplicate row and column insertions and also get constant lookup time. Using lists for the same thing will blow up the time complexity

// https://leetcode.com/problems/set-matrix-zeroes/

// "
// "This is a fairly simple problem. To create the next row we need to use the values present in the previous row.
// Initialize the result with the first row
// To create a new row, find the last row in the result
// Pair-wise add the element in this row to get the middle element of the new row
// Add 1 to each end of the new row
// Append it to result
// Remarks:
// For generating n rows we need to generate O(n²) elements, hence both the time and space complexity are O(n²)
// Extension:
// Print the nth row of the Pascal’s triangle

// https://leetcode.com/problems/pascals-triangle/"
// "To find indices of numbers that add to a given target we can use the following approach
// Iterate over list using enumerate to get both the index and the number
// Store index of each number and check if the difference between target and current number exist in the dictionary
// Remark:
// O(n) time complexity for iterating over the list
// O(n) space complexity for using a dictionary
// Extensions:
// Handle case when the solution does not exist in the list
// Return all pairs that satisfies the property
// The second function implements the extensions

// https://leetcode.com/problems/two-sum/

// "
// "The brute force method to solve this will take O(n³) time complexity. We will try sorting and searching instead.
// Sort the input
// Starting from left , for each unique (a, b) find -c in rest of the array
// As the rest of array is sorted the search can be done in log(n) time
// Remarks:
// O(n*log n) + O(n²*log n) time complexity
// Space complexity will depend on the number of solutions

// https://leetcode.com/problems/3sum/

// "
// "We need to find the element whose count is more than half the number of elements in given array
// Create a dictionary to keep count of each number in the array
// Traverse the array and update counters
// Exit as soon as counter of a number exceeds half of length
// Remarks:
// O(n) time complexity as we are traversing the array
// O(1) space complexity as only constant number of variables are used

// https://leetcode.com/problems/majority-element/"
// "Reverse Iterate through the array
// As long as there are only 9’s convert them to one
// For a non-9 number add 1 and break
// Check if the first number is 0, indicating that all the numbers were 9, insert 1 at the beginning for this case
// Remarks:
// O(n) time, O(1) space


// https://leetcode.com/problems/plus-one/"

