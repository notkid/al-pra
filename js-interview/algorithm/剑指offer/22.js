/**
 * 剑指 Offer 22. 链表中倒数第k个节点
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
    for(let i = 0; i< k;i++) {
        node = node.next
    }
    while(node && head) {
        head = head.next
        node = node.next
    }
    return head
};