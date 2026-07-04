class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {

        let numsSet = new Set([nums[0]])
        console.log("numsSet",numsSet)

        for (let i = 1; i < nums.length; i++) {
            if (!numsSet.has(nums[i])) {
                numsSet.add(nums[i])


            }
            else {

                return nums[i]
            }



        }









    }
}
