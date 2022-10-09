/**
 * 
 * 116. 填充每个节点的下一个右侧节点指针
 * 
 */
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    if (!root) return null
    var traverse = (node1, node2) => {
        if (!node1 || !node2) {
            return
        }
        node1.next= node2
        traverse(node1.left, node1.right)
        traverse(node1.right, node2.left)
        traverse(node2.left, node2.right)
    }
    traverse(root.left, root.right)
    return root
};