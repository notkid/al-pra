/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */


/**
 * @param {Node} root
 * @return {Node}
 */
 var treeToDoublyList = function(root) {
    let head = null, pre = null
    var dfs = function(node) {
        if (!node) return
        dfs(node.left)
        
        if (!pre) {
            head = node
        } else {
            pre.right = node
            node.left = pre
        }
        pre = node

        dfs(node.right)
    }
    dfs(root)
    head.left = pre
    pre.right = head
    return head
};