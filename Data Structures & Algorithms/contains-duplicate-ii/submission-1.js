class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {

      const numIndices = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        
       
        if (numIndices.has(currentNum) && i - numIndices.get(currentNum) <= k) {
            return true;
        }
        
      
        numIndices.set(currentNum, i);
    }
    
    return false;

    }
}
