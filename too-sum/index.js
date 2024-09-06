
// --- Examples
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

function tooSum(array, target) {
    const map = {};

    for (let i = 0; i < array.length; i++) {
        const div = target - array[i];

        if (map.hasOwnProperty(div)) {
            return [map[div], i];
        }

        map[array[i]] = i;
    }
    return [];
}

const arr = [2, 7, 11, 15];
const sum = tooSum(arr, 9);
console.log(sum);

module.exports = tooSum;
