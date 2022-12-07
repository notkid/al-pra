/**
 * 剑指 Offer 25. 合并两个排序的链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    const dumyHead = new ListNode(-1)
    let node = dumyHead
    while(l1 && l2) {
        if (l1.val <= l2.val) {
            node.next = l1
            l1 = l1.next
        } else {
            node.next = l2
            l2 = l2.next
        }
        node = node.next
    }
    node.next = l1 ? l1 :  l2
    return dumyHead.next
};  