/*
Given two integer arrays nums1 and nums2, return an array of their
intersection
    . Each element in the result must be unique and you may return the result in any order.



    Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.


    Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000*/


/**
 * Solution #2
 * O(N) / O(N)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/*var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    return Array.from([...set1].filter(num => set2.has(num)));
};*/

/**
 * My solution #1
 * O(N) / O(1)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const [small, large] = nums1.length >= nums2.length ? [nums2, nums1] : [nums1, nums2];

    const set = new Set(large);
    const result = new Set();

    for(let num of small) {
        if (set.has(num)) {
            result.add(num);
        }
    }

    return Array.from(result);
};

const result = intersection([1,2,2,1], [2,2]);
console.log(result.length === 1);
console.log(result[0] === 2);