// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) {
            return null;
        }

        let curr = head;
        while (curr) {
            let clonedNode = new Node(curr.val, curr.next, null);
            curr.next = clonedNode;
            curr = clonedNode.next;
        }

        curr = head;
        while (curr) {
            if (curr.random) {
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }

        curr = head;
        let clonedHead = head.next;

        while (curr) {
            let clonedNode = curr.next;

            curr.next = clonedNode.next;

            if (clonedNode.next) {
                clonedNode.next = clonedNode.next.next;
            }

            curr = curr.next;
        }

        return clonedHead;
    }
}

