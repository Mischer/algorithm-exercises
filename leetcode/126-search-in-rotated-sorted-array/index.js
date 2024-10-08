 /*
There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

You must decrease the overall operation steps as much as possible.



Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false


Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
nums is guaranteed to be rotated at some pivot.
-104 <= target <= 104
*/


/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        const middle = Math.floor((left + right ) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (nums[left] <= nums[middle]) { // check is the left side is sorted
            if (nums[left] <= target && target < nums[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else { // else the right side is sorted
            if (nums[middle] < target && target <= nums[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }

    return -1;
};



const result = search([4,5,6,7,0,1,2], 4);
console.log(result === 0);

const result1 = search([4,5,6,7,0,1,2], 3);
console.log(result1 === -1);

const result2 = search([1], 0);
console.log(result2 === -1);

const result3 = search([4,5,6,7,0,1,2], 7);
console.log(result3 === 3);

const result4 = search([4,5,6,7,0,1,2], 0);
console.log(result4 === 4);