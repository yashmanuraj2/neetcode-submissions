class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0,
            r = nums.length;

        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                l = mid+1 ;
            } else {
                r = mid ;
            }
        }
        return -1

    }
}
