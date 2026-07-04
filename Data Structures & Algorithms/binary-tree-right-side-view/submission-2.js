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
     * @return {number[]}
     */
    rightSideView(root) {
   if (!root) return [];

  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let rightmost = null;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      rightmost = current;

      if (current.left) 
      
      queue.push(current.left);
      if (current.right)
       queue.push(current.right);
    }

    result.push(rightmost.val); 
  }

  return result;
 

    }
}
