class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let res = new Array(n).fill(1);

        let leftProduct = 1;
        for (let i = 0; i < n; i++) {
            res[i] = leftProduct;
            leftProduct *= nums[i];
        }

        let rightProduct = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= rightProduct;
            rightProduct *= nums[i];
        }

        return res;
    }
}
