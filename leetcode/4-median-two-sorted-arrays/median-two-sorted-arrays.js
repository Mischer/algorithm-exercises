/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).



Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var medianTwoSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0, high = m;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const maxX = (partitionX === 0) ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
        const maxY = (partitionY === 0) ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];

        const minX = (partitionX === m) ? Number.MAX_SAFE_INTEGER : nums1[partitionX];
        const minY = (partitionY === n) ? Number.MAX_SAFE_INTEGER : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted.");
};

/**
 * O (m+n) / O (1)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/*
var medianTwoSortedArrays = function(nums1, nums2) {
    if(nums1.length === 0 && nums2.length === 0) {
        return 0;
    }

    let s1 = 0;
    let s2 = 0;

    const mergedArray = [];
    while(nums1[s1] !== undefined && nums2[s2] !== undefined) {
        if (nums1[s1] < nums2[s2]) {
            mergedArray.push(nums1[s1]);
            s1++;
        } else {
            mergedArray.push(nums2[s2]);
            s2++;
        }
    }

    if (nums1[s1] !== undefined) {
        mergedArray.push(...nums1.slice(s1));
    }

    if (nums2[s2] !== undefined) {
        mergedArray.push(...nums2.slice(s2));
    }

    const resultLength = nums1.length + nums2.length;
    const median = Math.floor(resultLength/2);
    if (resultLength%2 === 0) {
        return (mergedArray[median] + mergedArray[median - 1])/2;
    } else {
        return mergedArray[median];
    }
*/

module.exports = medianTwoSortedArrays;