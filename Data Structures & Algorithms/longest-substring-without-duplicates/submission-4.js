class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
           if (s === "") {
        return 0;
    }

    let maxLength = 0;
    let start = 0;
    const charMap = new Map();

    for (let end = 0; end < s.length; end++) {
        let char = s[end];
        if (charMap.has(char)) {
            start = Math.max(charMap.get(char) + 1, start);
        }
        charMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
    }
}
