/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  const q = [],
    ret = [];

  q.push(root);
  while (q.length) {
    let length = q.length;
    for (let i = 1; i <= length; i++) {
      const node = q.shift();
      if (node) {
        ret.push(node.val);
        if (node.left) {
          q.push(node.left);
        }
        if (node.right) {
          q.push(node.right);
        }
      }
    }
  }
  return ret;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder2 = function (root) {
  const q = [],
    ret = [];
  if (root) {
    q.push(root);
  }
  while (q.length) {
    let length = q.length;
    ret.push([]);
    for (let i = 1; i <= length; i++) {
      const node = q.shift();
      if (node) {
        ret[ret.length - 1].push(node.val);
        if (node.left) {
          q.push(node.left);
        }
        if (node.right) {
          q.push(node.right);
        }
      }
    }
  }
  return ret;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var levelOrder3 = function (root) {
    const q = [],
      ret = [];
    if (root) {
      q.push(root);
    }
    while (q.length) {
      let length = q.length;
      let push = ret.length % 2 ===0 ? 'push': 'unshift'
      ret.push([]);
      for (let i = 1; i <= length; i++) {
        const node = q.shift();
        if (node) {
          ret[ret.length - 1][push](node.val);
          if (node.left) {
            q.push(node.left);
          }
          if (node.right) {
            q.push(node.right);
          }
        }
      }
    }
    return ret;
  };
  