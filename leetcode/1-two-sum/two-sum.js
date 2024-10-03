/**
 * O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const div = target - nums[i];

        if (map.has(div)) {
            return [map.get(div), i];
        }

        map.set(nums[i], i);
    }
};

module.exports = twoSum;
