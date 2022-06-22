/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let SEP = ",",
  NULL = "#";

var serializeHelper = function (node, arr) {
  if (!node) {
    arr.push(NULL)
    return;
  }

  arr.push(node.val)

  serializeHelper(node.left, arr);
  serializeHelper(node.right, arr);
};

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let arr = [];
  serializeHelper(root, arr);
  return arr.join(SEP)
};

var deserializeHelper = function (nodes) {
  if (nodes.length === 0) return null;
  const first = nodes.shift();
  if (first === NULL) {
    return null;
  }
  const root = new TreeNode(first);
  root.left = deserializeHelper(nodes);
  root.right = deserializeHelper(nodes);
  return root;
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const nodes = data.split(SEP);
  return deserializeHelper(nodes)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

console.log(serialize([1,2,3,null,null,4,5]))