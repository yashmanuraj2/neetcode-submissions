/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
  function dfs(node) {
        // Base case: if the node is null, its depth is 0
        if (!node) {
            return 0;
        }
        
     
        let leftDepth = dfs(node.left);
        let rightDepth = dfs(node.right);
      
        return 1 + Math.max(leftDepth, rightDepth);
    }

 
    return dfs(root);
    }
}
