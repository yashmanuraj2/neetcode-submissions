class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {


        const numSet = new Set(nums) 
    let maxCount = 0;
        console.log("numsSet",numSet)
          for (let num of numSet) {
       
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let count = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                count += 1;
            }

            maxCount = Math.max(maxCount, count);
        }
    }

    return maxCount;




    }
}
