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
     * @return {boolean}
     */
    isBalanced(root) {
        function dfs(node) {
            if (!node) {
                return 0;
            }
            let leftDepth = dfs(node.left);
            if (leftDepth === -1) return -1;
            let rightDepth = dfs(node.right);
            if (rightDepth === -1) return -1;
            if (Math.abs(leftDepth - rightDepth) > 1) {
                return -1;
            }
            return Math.max(leftDepth, rightDepth) + 1;
        }
        return dfs(root)!==-1
    }
}
