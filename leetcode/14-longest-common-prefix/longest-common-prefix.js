/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */

/**
 * O(n x m) / O(m)
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
        if (strs.length === 0) return '';
        let maxPrefix = strs[0];

        for(let i = 1; i < strs.length; i++) {
            maxPrefix = checkBySymbol(maxPrefix, strs[i]);
            if (!maxPrefix || maxPrefix.length === 0) {
                return '';
            }
        }

        return maxPrefix;

        function checkBySymbol(w1, w2) {
            const [minWord, maxWord] = w1.length > w2.length ? [w2, w1] : [w1, w2];
            let mergeWord = [];

            for (let i = 0; i < minWord.length; i++) {
                if (minWord[i] !== maxWord[i]) {
                    return mergeWord.join('');
                }
                mergeWord.push(minWord[i]);
            }

            return mergeWord.join('');
        }
    };

module.exports = longestCommonPrefix;