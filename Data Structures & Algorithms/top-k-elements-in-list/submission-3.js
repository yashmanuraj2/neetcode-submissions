class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap = new Map();

        for (let num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        let buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const [num, freq] of countMap) {
            buckets[freq].push(num);
        }

        let result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                result.push(...buckets[i]);
            }
            if (result.length === k) {
                break;
            }
        }

        return result;
    }
}
