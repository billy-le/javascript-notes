// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const mergeSortedArray = (nums1, m, nums2, n) => {
    const finalArrayLength = m + n;
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
    while (nums1.length !== finalArrayLength) {
        const index = nums1.findIndex((num) => num === 0);
        nums1.splice(index, 1);
    }
};

const testCase1 = mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // answer: [ 1, 2, 2, 3, 5, 6 ];
const testCase2 = mergeSortedArray(
    [-1, 0, 0, 3, 3, 3, 0, 0, 0],
    6,
    [1, 2, 2],
    3
); // answer: [-1, 0, 0, 1, 2, 2, 3, 3, 3]
