class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        if (n === 1) return nums[0];
        if (n === 2) return Math.max(nums[0], nums[1]);

        const robLinear = (start, end) => {
            let rob1 = 0;
            let rob2 = 0;

            for (let i = start; i <= end; i++) {
                let temp = Math.max(rob1 + nums[i], rob2);
                rob1 = rob2;
                rob2 = temp;
            }
            return rob2;
        };

        return Math.max(robLinear(0, n - 2), robLinear(1, n - 1));
    }
}
