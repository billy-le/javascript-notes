// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1
// Explanation:
// Only 1771 contains an even number of digits.

// Constraints:

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 10^5

const findNumbersWithEvenDigits = (nums) => {
    let number = 0;

    for (const num of nums) {
        // convert each number to a string and then split it into an array
        const numStringArray = num.toString().split('');

        // using modulo to determine if the number string array is even
        if (numStringArray.length % 2 === 0) {
            number++;
        }
    }

    return number;
};

const testCase1 = [11251, 12123, 1212, 11]; // answer: 2
const testCase2 = [121, 123125, 123, 123, 123, 11, 1, 22]; // answer: 3

console.log('test case 1:', findNumbersWithEvenDigits(testCase1));
console.log('test case 2:', findNumbersWithEvenDigits(testCase2));
