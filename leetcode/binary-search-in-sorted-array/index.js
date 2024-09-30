/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 *
 * O(log n)
 */
const search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        const middle = Math.floor((left + right ) / 2);

        if (nums[middle] === target) {
            return middle;
        }
        if (nums[middle] < target) {
            left = middle + 1;
        }
        if (nums[middle] > target) {
            right = middle - 1;
        }
    }

    return -1;
};


const result = search([4,5,6,7,8,9], 5);
console.log(result === 1);

const result1 = search([1,2,3,4,5,6,7,8,9], 8);
console.log(result1 === 7);

const result2 = search([0, 1,2,3,4,5,6,7,8,9], 0);
console.log(result2 === 0);