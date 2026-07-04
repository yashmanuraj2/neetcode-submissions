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
        
        // Find the depth of the left and right subtrees
        let leftDepth = dfs(node.left);
        let rightDepth = dfs(node.right);
        
        // The max depth at this node is 1 (the node itself) 
        // plus the maximum of its subtrees' depths
        return 1 + Math.max(leftDepth, rightDepth);
    }

    // Call the helper function and return its result
    return dfs(root);
    }
}
