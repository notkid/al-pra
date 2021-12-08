/**
 * 
 * 100. 相同的树
 * 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    let isSame = true
    const traverse = (node1, node2) => {
        if (!node1 && !node2) {
            return
        }
        if ((node1 && !node2) || (!node1 && node2)) {
            isSame = false
            return
        }
        if(node1.val !== node2.val) {
            isSame = false
        }
        traverse(node1.left, node2.left)
        traverse(node1.right, node2.right)
    }
    traverse(p,q)
    return isSame
};