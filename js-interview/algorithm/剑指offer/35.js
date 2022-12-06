/**
 * 剑指 Offer 35. 复杂链表的复制
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head, cachedNode = new Map()) {
    if (head === null) return null
    if(!cachedNode.has(head)) {
        cachedNode.set(head, {val:head.val})
        Object.assign(cachedNode.get(head), {
            next: copyRandomList(head.next, cachedNode),
            random: copyRandomList(head.random,cachedNode)
        })
    }
    return cachedNode.get(head)
};