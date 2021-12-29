/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
     let ancestor = root
    while(true) {
        if (p.val > ancestor.val && q.val > ancestor.val) {
            ancestor = ancestor.right
        } else if (p.val < ancestor.val && q.val < ancestor.val) {
            ancestor = ancestor.left
        } else {
            break
        }
    }
    return ancestor
};