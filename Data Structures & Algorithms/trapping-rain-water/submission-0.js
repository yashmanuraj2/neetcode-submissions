class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        

        if (height.length === 0) return 0;

    let prefix = new Array(height.length);
    let suffix = new Array(height.length);
    let totalArea = 0;


    prefix[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        prefix[i] = Math.max(prefix[i - 1], height[i]);
    }
   
    suffix[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        suffix[i] = Math.max(suffix[i + 1], height[i]);
    }

   
    for (let i = 0; i < height.length; i++) {
        totalArea += Math.min(prefix[i], suffix[i]) - height[i];
    }

    return totalArea;






    }
}
