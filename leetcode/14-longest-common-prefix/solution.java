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
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";
        String maxPrefix = strs[0];

        for(int i = 1; i < strs.length; i++) {
            maxPrefix = checkBySymbol(maxPrefix, strs[i]);
            if (maxPrefix.length() == 0) {
                return "";
            }
        }

        return maxPrefix;
    }

    public String checkBySymbol(String w1, String w2) {
        String minWord = w1.length() > w2.length() ? w2 : w1;
        String maxWord = w1.length() > w2.length() ? w1 : w2;

        StringBuilder mergeWord = new StringBuilder();
        for (int i = 0; i < minWord.length(); i++) {
            if (minWord.charAt(i) != maxWord.charAt(i)) {
                return mergeWord.toString();
            }

            mergeWord.append(minWord.charAt(i));
        }

        return mergeWord.toString();
    }
}