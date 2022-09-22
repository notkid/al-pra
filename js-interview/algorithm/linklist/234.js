/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function getEndofHalf(head) {
    let slow = head
    let fast = head
    while(fast.next) {
        slow = slow.next
        fast.next = fast.next.next
    }
    return slow
}

function revertList(node) {
    
    let node1 = node
    let node2 = null
    while(node1) {
        let next = node1.next
        node1.next = node2
        node2 = node1
        node1 = next
    }
    return node2
}

 var isPalindrome = function(head) {

    const half = getEndofHalf(head)
    const list = revertList(half)
    let p1 = head
    let p2 = list
    let result = true
    while(result && p2) {
        if (p1.val !== p2.val) {result = false}
        p1 = p1.next
        p2 = p2.next
    }
    half.next = revertList(half)
    return result
};