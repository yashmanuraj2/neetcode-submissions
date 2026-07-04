class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
      if (nums.length === 0) return 0;
    
    
    let dp = Array(nums.length).fill(1);

    let maxLIS = 1;
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
           
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
       
        maxLIS = Math.max(maxLIS, dp[i]);
    }
    
    return maxLIS
    }
}
