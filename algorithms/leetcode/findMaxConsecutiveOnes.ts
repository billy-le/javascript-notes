// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

const findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0;
    let consecutiveCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            // keep adding to consecutive count by 1
            consecutiveCount++;
        } else if (nums[i] === 0) {
            // if current num is 0, reset consecutive count
            consecutiveCount = 0;
        }
        // comparison after each iteration to add max count
        if (consecutiveCount > maxCount) {
            maxCount++;
        }
    }

    return maxCount;
};

const testCase1 = [1, 1, 0, 0, 0, 1, 1, 0, 0, 1]; // answer: 2
const testCase2 = [0, 0, 1, 0, 1, 0, 1, 1, 1, 0]; // answer: 3
const testCase3 = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0]; // answer: 2
const testCase4 = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]; // answer: 3
const testCase5 = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1]; // answer: 5

console.log('test case 1:', findMaxConsecutiveOnes(testCase1));
console.log('test case 2:', findMaxConsecutiveOnes(testCase2));
console.log('test case 3:', findMaxConsecutiveOnes(testCase3));
console.log('test case 4:', findMaxConsecutiveOnes(testCase4));
console.log('test case 5:', findMaxConsecutiveOnes(testCase5));
