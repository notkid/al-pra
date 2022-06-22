/**
 * 
 * 94. 二叉树的中序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    const ret = []
    const traverse = (node) => {
        if (node === null) return

        traverse(node.left)
        ret.push(node.val)
        traverse(node.right)
    }
    traverse(root)
    return ret
};