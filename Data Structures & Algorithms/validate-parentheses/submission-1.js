class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
let sMap = {
    "}": "{",
    "]": "[",
    ")": "("
};
let stack = [];

for (let i = 0; i < s.length; i++) {
    let char = s[i];

    
    if (sMap[char]) {
        
        let topElement = stack.pop(); 
        if (topElement !== sMap[char]) {
            return false; 
        }
    } else {
       
        stack.push(char);
    }
}

return stack.length === 0;







    }
}
