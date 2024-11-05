class Solution {
    public String convert(String s, int numRows) {
        if (numRows == 1) {
            return s;
        }

        StringBuilder result = new StringBuilder();
        int step = 2 * numRows - 2;
        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j + i < s.length(); j+=step) {
                result.append(s.charAt(i + j));

                if (i != 0 && i != numRows - 1 && (j + step - i) < s.length()) {
                    result.append(s.charAt(j + step - i));
                }
            }
        }

        return result.toString();
    }
}