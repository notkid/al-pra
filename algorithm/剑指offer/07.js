/**
 *
 * 剑指 Offer 07. 重建二叉树
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  var build = function (
    preorder,
    prestart,
    preend,
    inorder,
    inorderstart,
    inorderend
  ) {
    if (prestart > preend) {
      return null;
    }
    let rootVal = preorder[prestart];

    let index = 0;

    for (let i = inorderstart; i <= inorderend; i++) {
      if (inorder[i] === rootVal) {
        index = i;
        break;
      }
    }
    let leftSize = index - inorderstart;
    let root = new TreeNode(rootVal);
    root.left = build(
      preorder,
      prestart + 1,
      prestart + leftSize + 1,
      inorder,
      inorderstart,
      index - 1
    );
    root.right = build(
      preorder,
      prestart + leftSize + 1,
      preend,
      inorder,
      index + 1,
      inorderend
    );
    return root;
  };

  return build(preorder, 0, preorder.length, inorder, 0, inorder.length);
};
