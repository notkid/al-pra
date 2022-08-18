/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
    let num = 0,list = new ListNode(null)
    let head = list
    while(l1 != null || l2 !=null) {
        const result =(l1?.val || 0) + (l2?.val || 0) + num
        if (result > 9) {
            num = 1
            list.next = new ListNode(result % 10)
        } else {
            num = 0
            list.next = new ListNode(result)
        }
        list = list.next
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }
    if (num > 0) {
        list.next = new ListNode(num)
    }
    return head.next
};
