/**
 * 剑指 Offer 26. 树的子结构
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!A || !B) return false;
  var dfs = function (nodeA, nodeB) {
    if (!nodeB) return true;
    if (!nodeA || nodeA.val !== nodeB.val) return false;
    return dfs(nodeA.left, nodeB.left) && dfs(nodeA.right, nodeB.right);
  };

  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};
