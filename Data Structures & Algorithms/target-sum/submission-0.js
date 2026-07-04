class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const totalSum = nums.reduce((acc, num) => acc + num, 0);

        if (Math.abs(target) > totalSum || (totalSum + target) % 2 !== 0) {
            return 0;
        }

        const subsetSumTarget = (totalSum + target) / 2;

        const dp = new Array(subsetSumTarget + 1).fill(0);

        dp[0] = 1;

        for (const num of nums) {
            for (let i = subsetSumTarget; i >= num; i--) {
                dp[i] += dp[i - num];
            }
        }

        return dp[subsetSumTarget];
    }
}
