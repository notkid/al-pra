/**
 * 剑指 Offer 06. 从尾到头打印链表
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function (head) {
    let pre = head, ret = []
    while (head) {
        ret.push(head.val)
        head = head.next
    }
    return ret.reverse()
};