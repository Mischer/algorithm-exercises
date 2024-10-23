/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
 */

/**
 * O(n) / O(n)
 *
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
    const leftMaxList = []; // list of max values from the left side to the right
    const rightMaxList = []; // list of max values from the right side to the left

    let left = 0;
    let right = height.length - 1;

    let currentLeftHeight = 0;
    let currentRightHeight = 0;

    while (left < height.length) {
        if (height[left] > currentLeftHeight) {
            currentLeftHeight = height[left];
        }

        if (height[right] > currentRightHeight) {
            currentRightHeight = height[right];
        }

        leftMaxList[left] = currentLeftHeight;
        rightMaxList[right] = currentRightHeight;

        left++;
        right--;
    }

    let sum = 0;
    for (let i = 0; i < height.length; i++) {
        sum = sum + Math.min(leftMaxList[i], rightMaxList[i]) - height[i];
    }

    return sum;
};

module.exports = trap;