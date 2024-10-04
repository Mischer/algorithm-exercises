/*
Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    /*if (s.length === 1) return s;

    let map = new Map();
    let result = s[0];

    for (let i = 0; i <= s.length; i++) {
        const mapValue = map.get(s[i]);
        if (mapValue) {
            for (let j of mapValue) {
                const substr = s.substring(j, i + 1);
                if (isPalindromic(substr) && substr.length >= result.length) {
                    result = substr;
                }
            }
        }

        map.set(s[i], mapValue ? mapValue.concat([i]) : [i]);
    }

    return result;

    function isPalindromic(str) {
        return str.split('').every((char, i) => {
            return char === str[str.length - i - 1];
        });
    }*/

    if (s.length === 0 || s.length === 1) return s;

    let result = s[0];

    for (let i = 0; i < s.length; i++) {
        let oddPalindrome = expandAroundCenter(s, i, i);
        if (oddPalindrome.length > result.length) {
            result = oddPalindrome;
        }

        let evenPalindrome = expandAroundCenter(s, i, i + 1);
        if (evenPalindrome.length > result.length) {
            result = evenPalindrome;
        }
    }

    return result;

    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        return s.substring(left + 1, right);
    }
};

module.exports = longestPalindrome;