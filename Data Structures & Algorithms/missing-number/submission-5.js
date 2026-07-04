class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const numsSet = new Set(nums)

        for (let i = 0; i <= Math.max(...nums); i++) {
            if (!numsSet.has(i)) {

                return i
            }
           


        }
        return  Math.max(...nums)+1






    }
}
