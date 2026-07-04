class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = []
      function backtrack(remaining, start, combination) {
        if (remaining < 0) return;
        if (remaining === 0) {
            result.push([...combination]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            combination.push(nums[i]);
            backtrack(remaining - nums[i], i, combination);
            combination.pop()
        }
    }

    backtrack(target, 0, []);
    return result;




    }
}