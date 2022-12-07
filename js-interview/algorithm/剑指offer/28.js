/*
剑指 Offer 28. 对称的二叉树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var helper = function (p,q) {
    if (!p && !q) return true
    if (!p || !q) return false
    return p.val === q.val && helper(p.left, q.right) && helper(p.right, q.left)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    return helper(root, root)
};