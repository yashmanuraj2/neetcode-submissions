class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        let stack = [];
    const operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(a / b) 
    };

    for (let token of tokens) {
        if (operators[token]) {
            
            let b = stack.pop();
            let a = stack.pop();
            stack.push(operators[token](a, b));
        } else {
          
            stack.push(Number(token));
        }
    }
    return stack[0];







    }
}
