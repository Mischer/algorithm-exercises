/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


Constraints:

-2**31 <= x <= 2**31 - 1

Follow up: Could you solve it without converting the integer to a string?
 */


/**
 * O(Logx) / O(1)
 *
 * @param {number} x
 * @return {boolean}
 */
var isIntPalindrome = function(x) {
    // Negative numbers and numbers ending with 0 (but not 0 itself) are not palindromes
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }

    let reversedNum = 0;
    while (x > reversedNum) {
        // Move the last digit from x to reversedNum
        reversedNum = reversedNum * 10 + x % 10;
        x = Math.floor(x / 10); // Remove the last digit from x
    }

    // For numbers with odd number of digits, ignore the middle digit
    return x === reversedNum || x === Math.floor(reversedNum / 10);
};



/*var isPalindrome = function(x) {
    const s = x.toString();
    let start = 0;
    let end = s.length - 1;

    while(end > start) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};*/

/*var isPalindrome = function(x) {
    return x.toString() === x.toString().split('').reverse().join('');
};*/

module.exports = isIntPalindrome;