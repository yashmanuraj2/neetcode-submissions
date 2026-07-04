class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {


        let leftProd = 1, rightProd = 1, finalProd = 1, res = [] , current = 0


        while (current < nums.length) {
            if (current !== nums.length - 1) {
                for (let i = current + 1; i < nums.length; i++) {

                    rightProd = rightProd * nums[i]

                }

            }

            if (current !== 0) {
                for (let j = current - 1; j >= 0; --j) {

                    leftProd = leftProd * nums[j]
                }

            }

            res.push(leftProd * rightProd)
            leftProd = 1
            rightProd = 1
            ++current
        }
     
     return res






    }
}
