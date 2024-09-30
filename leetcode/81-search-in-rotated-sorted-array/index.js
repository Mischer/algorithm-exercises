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
        const middle = (right + left) >> 1;

        if (nums[middle] === target) {
            return true;
        }

        if(nums[middle] === nums[left] && nums[middle] === nums[right]){ // to handle duplicate element case
            left++;
            right--;
            continue;
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

    return false;
};



const result = search([2,5,6,0,0,1,2], 3);
console.log(result === false);

const result1 = search([2,5,6,0,0,1,2], 0);
console.log(result1 === true);

const result2 = search([1,0,1,1,1], 0);
console.log(result2 === true);

const result4 = search([2,0,0,1], 1);
console.log(result4 === true);

const result3 = search([15,16,19,20,25,1,3,4,5,7,10,14], 25);
console.log(result3 === true);

const result5 = search([1,1,1,1,1,1,1,1,1,13,1,1,1,1,1,1,1,1,1,1,1,1], 13);
console.log(result5 === true);
