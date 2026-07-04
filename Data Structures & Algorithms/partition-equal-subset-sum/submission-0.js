class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const totalSum = nums.reduce((sum, num) => sum + num, 0);

        if (totalSum % 2 !== 0) {
            return false;
        }

        const target = totalSum / 2;

        const dp = new Array(target + 1).fill(false);

        dp[0] = true;

        for (const num of nums) {
            for (let i = target; i >= num; i--) {
                dp[i] = dp[i] || dp[i - num];
            }

            if (dp[target]) {
                return true;
            }
        }

        return dp[target];
    }
}
