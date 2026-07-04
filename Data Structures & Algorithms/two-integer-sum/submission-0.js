class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let numsMap = new Map() , res = []
        numsMap.set(nums[0],0) 

        for(let i = 1 ;i<nums.length;i++)
        {
            if(numsMap.has((target - nums[i])))
                 
            res.push(i, numsMap.get(target-nums[i]))
            else{

                numsMap.set(nums[i],i)
            }


        }
        return res




    }
}
