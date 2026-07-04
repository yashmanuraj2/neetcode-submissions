class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
      
    let maxReach = 0;
    const target = nums.length - 1;

    for (let i = 0; i <= target; i++) {
       
        if (i > maxReach) {
            return false;
        }

       
        maxReach = Math.max(maxReach, i + nums[i]);

        if (maxReach >= target) {
            return true;
        }
    }

    return false;





    }
}
