// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Note:

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.

const squaresOfSortedArray = (nums) => {
    return nums.map((num) => num * num).sort((a, b) => a - b);
};

const testCase1 = [-4, -1, 0, 3, 10]; // answer: [0, 1, 9, 16, 100]
const testCase2 = [-7, -3, 2, 3, 11]; // answer: [4, 9, 9, 49, 121]
const testCase3 = [0, 1, 2, 3, 4, 5]; // answer: [0, 1, 4, 9, 16, 25]
const testCase4 = [5, 4, 3, 2, 111]; // answer: [4, 9, 16, 25, 12321]
const testCase5 = [77, 142, 1238, 12, 18]; // answer: [144, 324, 5929, 20164, 1532644]

console.log('test case 1:', squaresOfSortedArray(testCase1));
console.log('test case 2:', squaresOfSortedArray(testCase2));
console.log('test case 3:', squaresOfSortedArray(testCase3));
console.log('test case 4:', squaresOfSortedArray(testCase4));
console.log('test case 5:', squaresOfSortedArray(testCase5));
