/*
3. Longest Substring Without Repeating Characters
Attempted
Medium
Topics
Companies
Hint
Given a string s, find the length of the longest
substring
 without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */

/**
 * O(n) / O(1)
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let map = new Map();
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= start) { // index should be more than start to update it
            start = map.get(s[i]) + 1; //move start to right
        }

        map.set(s[i], i); // set new element or update element index
        result = Math.max(result, i - start + 1);
    }

    return result;
};

var lengthOfLongestSubstring1 = function(s) {
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

function runTests() {
    const tests = [
        { input: "abcabcbb", expected: 3 },  // "abc" (length 3)
        { input: "bbbbb", expected: 1 },     // "b" (length 1)
        { input: "pwwkew", expected: 3 },    // "wke" (length 3)
        { input: "dvdf", expected: 3 },      // "vdf" (length 3)
        { input: " ", expected: 1 },          // " " (length 1)
        { input: "abba", expected: 2 }          // "ab" (length 2)
    ];

    tests.forEach((test, index) => {
        const result = lengthOfLongestSubstring(test.input);
        console.log(`Test ${index + 1}:`, result);
        console.assert(result === test.expected, `Test ${index + 1} failed: expected ${test.expected}, but got ${result}`);
    });

    tests.forEach((test, index) => {
        const result = lengthOfLongestSubstring1(test.input);
        console.log(`Test ${index + 1}:`, result);
        console.assert(result === test.expected, `Test ${index + 1} failed: expected ${test.expected}, but got ${result}`);
    });

    console.log('All tests passed!');
}

runTests();