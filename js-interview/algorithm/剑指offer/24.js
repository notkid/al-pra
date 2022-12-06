/**
 * 剑指 Offer 24. 反转链表
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
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (head == null ||  head.next == null) {
        return head
    }
    let last = reverseList(head.next)
    head.next.next = head
    head.next = null
    return last
};
var reverseList = function(head) {
    let prev = null,current = head
    while(current) {
        const node = current.next
        current.next = prev
        prev = current
        current = node
    }
}