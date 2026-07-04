class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        let l = 0, r = heights.length - 1, area = 1, maxArea = 0

        while (l < r) {
            if (heights[l] < heights[r]) {

                area = heights[l] * (r - l) 
                maxArea = Math.max(area, maxArea)
                ++l

            }
            else {
                area = heights[r] * (r - l )
                maxArea = Math.max(area, maxArea)
                --r

            }
       }
       return maxArea








    }
}
