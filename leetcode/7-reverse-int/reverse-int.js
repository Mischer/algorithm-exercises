/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the
signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

Constraints:

-231 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverseInt = function(x) {
    const max = Math.pow(2, 31);
    const sign = x < 0 ? '-' : '';
    const result = parseInt(sign + x.toString().split('').reverse().join(''));
    return (max * -1) > result || result > max ? 0 : result;
};

module.exports = reverseInt;