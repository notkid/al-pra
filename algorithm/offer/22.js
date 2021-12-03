/**
 * 
 * 剑指 Offer 22. 链表中倒数第k个节点
 * 
 * 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
    let node = head
    while(node && k) {
        [node, k] = [node.next, k-1]
    }
    while(node) {
        [node, head] = [node.next, head.next]
    }
    return head
};