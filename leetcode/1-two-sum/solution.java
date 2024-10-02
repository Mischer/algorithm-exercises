class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap();

        for(int i = 0; i < nums.length; i++) {
            int div = target - nums[i];

            if (map.containsKey(div)) {
                return new int[]{map.get(div), i};
            }

            map.put(nums[i], i);
        }
        return new int[]{};
    }
}