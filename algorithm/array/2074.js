/**
 *
 * 2074. 反转偶数长度组的节点
 *
 *
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
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

var reverseEvenLengthGroups = function (head) {
  let num = 1;
  let slow = new ListNode();
  slow.next = head
  let ret = slow;
  let fast = head;
  while (fast) {
    let i = 0;
    let old = slow
    while (i < num && fast) {
      fast = fast.next;
      slow = slow.next;
      i++;
    }
    if (i % 2 === 0) {
        slow.next = null
        let origin = old.next
        old.next = reverseList(origin)
        origin.next = fast
        slow = origin
    }
    num++
  }
  return ret.next
};
