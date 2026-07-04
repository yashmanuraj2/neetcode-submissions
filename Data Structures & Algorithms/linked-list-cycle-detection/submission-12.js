/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let dummy = head, slow = head,  fast = head
        if(!slow || !fast)
        {
            return false
        }

        while (fast.next && fast.next.next) {
            if (slow.next === fast.next.next) {
                return true;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
        return false
    }
}
