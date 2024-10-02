/**
 * O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const div = target - nums[i];

        if (map.has(div)) {
            return [map.get(div), i];
        }

        map.set(nums[i], i);
    }
};
const result1 = twoSum([2,7,11,15], 9);
console.log( result1[0] === 0 && result1[1] === 1);

const result2 = twoSum([3,2,4], 6);
console.log( result2[0] === 1 && result2[1] === 2);

const result3 = twoSum([3,3], 6);
console.log( result3[0] === 0 && result3[1] === 1);