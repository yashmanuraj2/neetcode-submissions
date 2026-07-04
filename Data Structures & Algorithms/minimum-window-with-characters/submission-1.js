class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (!s || !t || s.length === 0 || t.length === 0) {
            return "";
        }

        const dictT = {};
        for (let i = 0; i < t.length; i++) {
            const char = t[i];
            dictT[char] = (dictT[char] || 0) + 1;
        }

        const required = Object.keys(dictT).length;

        let l = 0,
            r = 0;

        let formed = 0;

        const windowCounts = {};

        let ans = [Infinity, null, null];

        while (r < s.length) {
            let char = s[r];
            windowCounts[char] = (windowCounts[char] || 0) + 1;

            if (dictT[char] && windowCounts[char] === dictT[char]) {
                formed++;
            }

            while (l <= r && formed === required) {
                char = s[l];

                if (r - l + 1 < ans[0]) {
                    ans = [r - l + 1, l, r];
                }

                windowCounts[char] -= 1;
                if (dictT[char] && windowCounts[char] < dictT[char]) {
                    formed--;
                }

                l++;
            }

            r++;
        }

        return ans[0] === Infinity ? "" : s.substring(ans[1], ans[2] + 1);
    }
}
