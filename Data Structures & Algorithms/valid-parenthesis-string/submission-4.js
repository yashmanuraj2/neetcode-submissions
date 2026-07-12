class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let leftStack = [];
        let starStack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(") {
                leftStack.push(i);
            } else if (s[i] === "*") {
                starStack.push(i);
            } else if (s[i] === ")") {
                if (leftStack.length > 0) {
                    leftStack.pop();
                } else if (starStack.length > 0) {
                    starStack.pop();
                } else {
                    return false;
                }
            }
        }

        while (leftStack.length > 0 && starStack.length > 0) {
            let leftIndex = leftStack.pop();
            let starIndex = starStack.pop();
            if (leftIndex > starIndex) {
                return false;
            }
        }

        return leftStack.length === 0;
    }
}
