class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
     
     const numsSet = new Set([nums[0]])
     console.log("nums[i]",numsSet)

     for(let i = 1 ;i<nums.length;i++)
     
     {
         if(numsSet.has(nums[i]))
         {
           return true
         }
        
         else
         numsSet.add(nums[i])


     }
     return false
     

  





    }
}
