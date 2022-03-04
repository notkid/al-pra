/**
 *
 * 96. 不同的二叉搜索树
 */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  var countNumTrees = function (start, end) {
    let ret = 0;
    if (start >= end) return 1;
    for (let i = start; i <= end; i++) {
      ret += countNumTrees(start, i - 1) * countNumTrees(i + 1, end);
    }
    return ret;
  };
  return countNumTrees(1, n);
};
