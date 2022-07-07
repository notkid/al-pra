/**
 *
 * 263. 丑数
 *
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;
  const factor = [2, 3, 5];
  for (let i of factor) {
    while (n % i === 0) {
      n /= i;
    }
  }
  return n == 1;
};
