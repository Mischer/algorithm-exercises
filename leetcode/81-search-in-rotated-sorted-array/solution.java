class Solution {
    public boolean search(int[] nums, int target) {
        if (nums.length == 0) {
            return false;
        }

        int left = 0;
        int right = nums.length - 1;
        while (left <= right) {
            int middle = (left + right) / 2;

            if (nums[middle] == target) {
                return true;
            }

            if (nums[left] == nums[middle] && nums[right] == nums[middle]) { // check the duplicates
                left++;
                right--;
                continue;
            }

            if (nums[left] <= nums[middle]) { // the left side is sorted
                if (nums[left] <= target && target < nums[middle]) {
                    right = middle - 1; // target in the left side
                } else {
                    left = middle + 1; // target in the right side
                }
            } else {
                if (nums[middle] < target && target <= nums[right]) {
                    left = middle + 1; // target in the right side
                } else {
                    right = middle - 1; // target in the left side
                }
            }
        }

        return false;
    }
}