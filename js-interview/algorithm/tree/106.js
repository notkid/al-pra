/**
 *
 *
 * 106. 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let hashMap = {};
  for (let i =0;i<inorder.length;i++) {
    hashMap[inorder[i]] = i;
  }

  var helper = function (
    inorder,
    postorder,
    inorderStart,
    inorderEnd,
    postorderStart,
    postorderEnd
  ) {
    if (inorderStart > inorderEnd) return null

    const postorder_root = postorder[postorderEnd]
    const root_index = hashMap[postorder_root]
    const left_size = root_index - inorderStart
    const root = new TreeNode(postorder_root)

    root.left = helper(
        inorder,
        postorder,
        inorderStart,
        root_index - 1,
        postorderStart,
        postorderStart + left_size - 1
    )
    root.right = helper(
        inorder,
        postorder,
        root_index + 1,
        inorderEnd,
        postorderStart + left_size,
        postorderEnd - 1
    )

    return root

  };

  return helper(
    inorder,
    postorder,
    0,
    inorder.length - 1,
    0,
    postorder.length - 1
  );
};
