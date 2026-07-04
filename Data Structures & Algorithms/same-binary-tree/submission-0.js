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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        function dfs(first, second) {
            if (!first && !second) {
                return true;
            }
            if (!first || !second) {
                return false
            }
            if (first.val !== second.val) {
                return false;
            }
            return (dfs(first.left,second.left) && dfs(first.right,second.right))
        }
        return dfs(p,q)



    }
}
