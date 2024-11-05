/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);

Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Example 3:
Input: s = "A", numRows = 1
Output: "A"

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
 */

/**
 * O(n) / O(1)
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const zigzagConversion = function(s, numRows) {
    if (numRows == 1) {
        return s;
    }

    let result = [];
    // Calculate the step size, which determines the intervals between characters in the same row.
    const step = 2 * numRows - 2;

    // Loop through each row of the zigzag pattern.
    for (let i = 0; i < numRows; i++) {
        // Loop through the string, jumping by the step size.
        for (let j = 0; j + i < s.length; j += step) {
            // Add the character that aligns vertically in the zigzag pattern.
            result.push(s[j + i]);

            // For all rows except the first and last, add the diagonally placed character.
            if (i !== 0 && i !== numRows - 1 && j + step - i < s.length) {
                result.push(s[j + step - i]);
            }
        }
    }

    // Join the array of characters into a string and return it.
    return result.join('');
};

module.exports = zigzagConversion;