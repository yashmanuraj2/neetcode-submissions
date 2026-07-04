class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
        function expandAroundCentre(l, r) {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
              --l
              ++r
                ++count;
            }
        }

        for (let i = 0; i < s.length; i++) {
            expandAroundCentre(i, i);
            expandAroundCentre(i, i + 1);
        }
        return count;
    }
}
