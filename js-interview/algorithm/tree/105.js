/**
 *
 *
 * 105. 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function (preorder, inorder) {
  const hashMap = {};
  for (let i = 0; i < inorder.length; i++) {
    hashMap[inorder[i]] = i;
  }
  var helper = (preorder, inorder, preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd) {
      return null;
    }
    let preorder_root = preorder[preStart];
    let root_index = hashMap[preorder_root];
    let left_size = root_index - inStart;
    let root = new TreeNode(preorder_root);

    root.left = helper(
      preorder,
      inorder,
      preStart + 1,
      preStart + left_size,
      inStart,
      root_index - 1
    );
    root.right = helper(
      preorder,
      inorder,
      preStart + left_size + 1,
      preEnd,
      root_index + 1,
      inEnd
    );
    return root
  };

  return helper(
    preorder,
    inorder,
    0,
    preorder.length - 1,
    0,
    inorder.length - 1
  );
};

