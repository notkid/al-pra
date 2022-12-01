/**
 * 2487. 从链表中移除节点
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var removeNodes = function(head) {
    if (!head.next) return head
    const node = removeNodes(head.next)
    if (node.val > head.val) return node
    head.next = node
    return head
 };