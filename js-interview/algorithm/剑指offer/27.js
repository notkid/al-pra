/**剑指 Offer 27. 二叉树的镜像
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var mirrorTree = function(root) {
    var dfs = function(node) {
        if (!node) return
        let tmp = node.left
        node.left = node.right
        node.right= tmp
        dfs(node.left)
        dfs(node.right)

    }
    dfs(root)
    return root
};