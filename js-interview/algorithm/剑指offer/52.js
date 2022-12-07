/**
 * 剑指 Offer 52. 两个链表的第一个公共节点
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB ) return null
    let pA = headA, pB = headB
    while(pA != pB) {
        pA = !pA ? headB : pA.next
        pB = !pB ? headA : pB.next
    }
    return pA
};