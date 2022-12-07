/**
 * 剑指 Offer 18. 删除链表的节点
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
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val == val) return head.next;
  let pre = head,
    cur = head;
  while (cur && cur.val !== val) {
    pre = cur;
    cur = cur.next;
  }
  if (cur) {
    pre.next = cur.next;
  }
  return head;
};
