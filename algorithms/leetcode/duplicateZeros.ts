// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

// Example 1:

// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]

// Note:

// 1 <= arr.length <= 10000
// 0 <= arr[i] <= 9

const duplicateZeroes = (arr) => {
    const arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        if (arr[i] === 0) {
            // store next value from i
            let temp = arr[i + 1];
            for (let k = i + 1; k < arrLength - 1; k++) {
                // store next value from k
                let temp2 = arr[k + 1];
                // swap temp into k's position
                arr[k + 1] = temp;
                // store next value from k to i
                temp = temp2;
            }
            // prevent adding an extra 0 past the array length
            if (i === arrLength - 1) {
                break;
            }
            // increment i again to skip over duplicate zero
            arr[i + 1] = 0;
            i++;
        }
    }

    console.log(arr);
};

const testCase1 = [1, 0, 2, 3, 0, 4, 5, 0]; // answer: [1, 0, 0, 2, 3, 0, 0, 4]
const testCase2 = [0, 0, 1, 2, 3, 4, 5, 6]; // answer: [0, 0, 0, 0, 1, 2, 3, 4]
const testCase3 = [0, 0, 0, 0, 0, 0, 0]; // answer: [0, 0, 0, 0, 0, 0, 0]

console.log('test case: 1', duplicateZeroes(testCase1));
console.log('test case: 2', duplicateZeroes(testCase2));
console.log('test case: 3', duplicateZeroes(testCase3));
