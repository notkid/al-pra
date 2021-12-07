/**
 * 
 * 104. 二叉树的最大深度
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
 * @return {number}
 */
var dfs = (node) => {
    let d = 0
    if (!node) {
        return 0
    }
    d = Math.max(dfs(node.left), dfs(node.right))  +1
    return d
    
}

 var maxDepth = function(root) {
    return root ? dfs(root) : 0
};