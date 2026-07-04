class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let numsMap = new Map(), result = []

        numsMap.set(nums[0], 0)
        for (let i = 1; i < nums.length; i++) {
            if (numsMap.has(target - nums[i])) {
                result.push(numsMap.get(target - nums[i]), i)


            }
            else {
                numsMap.set(nums[i], i)
            }


        }
        return result









    }
}
