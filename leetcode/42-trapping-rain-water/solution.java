class Solution {
    public int trap(int[] height) {
        int[] leftMaxList = new int[height.length];
        int[] rightMaxList = new int[height.length];

        int left = 0;
        int right = height.length - 1;

        int currentLeftHeight = 0;
        int currentRightHeight = 0;

        while (left < height.length) {
            if (height[left] > currentLeftHeight) {
                currentLeftHeight = height[left];
            }

            if (height[right] > currentRightHeight) {
                currentRightHeight = height[right];
            }

            leftMaxList[left] = currentLeftHeight;
            rightMaxList[right] = currentRightHeight;

            left++;
            right--;
        }

        int sum = 0;
        for (int i = 0; i < height.length; i++) {
            sum = sum + Math.min(leftMaxList[i], rightMaxList[i]) - height[i];
        }

        return sum;
    }
}