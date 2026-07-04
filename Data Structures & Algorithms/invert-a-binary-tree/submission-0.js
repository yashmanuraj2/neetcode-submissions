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
     * @return {TreeNode}
     */
    invertTree(root) {
        let temp = null
        if (!root) {
            return null
        }
        function dfs(node) {
            if (!node) {
                return
            }
            temp = node.left
            node.left = node.right
            node.right = temp

            dfs(node.left)
            dfs(node.right)

            return node

        }

        return dfs(root)





    }

}
