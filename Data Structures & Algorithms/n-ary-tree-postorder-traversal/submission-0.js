/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    postorder(root) {
          if (!root) return [];
    
    const stack = [root];
    const result = [];
    
    while (stack.length > 0) {
        const node = stack.pop();
      
        result.push(node.val);
       
        if (node.children) {
            for (let child of node.children) {
                stack.push(child);
            }
        }
    }
    
   
    return result.reverse();




    }
}
