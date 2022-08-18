/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let tail = head
    let slow = head
    for (let i = 0; i< n; i++) {
        tail = tail.next
    }
    if (!tail) {
        return head.next
    }
    while(tail.next) {
        tail = tail.next
        slow =slow.next
    }
    slow.next = slow.next.next
    return head
};