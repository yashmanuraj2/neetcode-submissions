class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let score = 0

        for (let i = 0; i < s.length; i++) {
            if (i + 1 < s.length) {
                score += (Math.abs(s[i + 1].charCodeAt(0) - s[i].charCodeAt(0)))
            }


        }
        return score

    }
}
