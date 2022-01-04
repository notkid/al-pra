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

  let index = hashMap[rootVal]

  let leftSize = index - inorderstart;
  let root = new TreeNode(rootVal);
  root.left = build(
    preorder,
    prestart + 1,
    prestart + leftSize ,
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

return build(preorder, 0, preorder.length -1, inorder, 0, inorder.length -1 );
};