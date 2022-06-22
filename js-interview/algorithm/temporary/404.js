/**
 * 
 * 
 * 404. 左叶子之和
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

 const isLeafNode = (node) => !node.left && !node.right
 const dfs = (node) => {
    let ans = 0
    if (node.left) {
        ans += isLeafNode(node.left) ? node.left.val : dfs(node.left)
    }
    if (node.right && !isLeafNode(node.right)) {
        ans += dfs(node.right)
    }
    return ans
}
 var sumOfLeftLeaves = function(root) {
     
    return root ? dfs(root) : 0
};