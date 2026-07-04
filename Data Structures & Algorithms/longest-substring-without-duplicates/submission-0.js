class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        

  let l = 0, r = 0;
    let maxLength = 0;
    let charSet = new Set();

    while (r < s.length) {
        if (!charSet.has(s[r])) {
            charSet.add(s[r]);
            maxLength = Math.max(maxLength, r - l + 1);
            r++;
        } else {
            charSet.delete(s[l]);
            l++;
        }
    }

    return maxLength;








    }
}
