
// --- Longest Substring Without Repeating Characters
// Input: nums = 'abcc'
// Output: 'abc'

function longestSubstring(str) {
    let start = 0;
    let maxLength = 0;
    let charIndexMap = new Map();


    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }

        charIndexMap.set(char, i);
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

module.exports = longestSubstring;
