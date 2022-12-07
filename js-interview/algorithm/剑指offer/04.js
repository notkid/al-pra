/**
 * 剑指 Offer 04. 二维数组中的查找
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  let i = matrix.length - 1,
    j = 0;
  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] > target) {
      i--;
    } else if (matrix[i][j] < target) {
      j++;
    } else {
      return true;
    }
  }
  return false;
};
