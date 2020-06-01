// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
// Example 2:

// Input: arr = [7,1,14,11]
// Output: true
// Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
// Example 3:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: In this case does not exist N and M, such that N = 2 * M.

// Constraints:

// 2 <= arr.length <= 500
// -10^3 <= arr[i] <= 10^3

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    if (!arr || arr.length == 0) {
        return false;
    }

    let i = 0;
    let num = arr[i];
    for (let j = 0; j < arr.length; j++) {
        if (i > arr.length) {
            return false;
        }
        if (j === arr.length - 1) {
            i++;
            num = arr[i];
            j = 0;
        }
        if (i !== j && arr[j] === num * 2) {
            return true;
        }
    }
};

const testCase1 = [10, 2, 5, 3]; // answer: true
const testCase2 = [7, 1, 14, 11]; // answer: true
const testCase3 = [3, 1, 7, 11]; // answer: false
const testCase4 = null; // answer: false;
const testCase5 = []; // answer: false;
const testCase6 = [-2, 0, 10, -19, 4, 6, -8]; // answer: false
const testCase7 = [-20, 8, -6, -14, 0, -19, 14, 4]; // answer: true

console.log(checkIfExist(testCase1));
console.log(checkIfExist(testCase2));
console.log(checkIfExist(testCase3));
console.log(checkIfExist(testCase4));
console.log(checkIfExist(testCase5));
console.log(checkIfExist(testCase6));
console.log(checkIfExist(testCase7));
