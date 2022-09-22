/**
 *
 * 29. 两数相除
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let ret = 0;
  if (divisor === 0) return 0;
  while (dividend >= Math.abs(divisor) && dividend > 0) {
    if (divisor > 0) {
      dividend -= divisor;
    } else {
      dividend += divisor;
    }
    ret++;
  }
  return divisor > 0 ? ret : -ret;
};

console.log(divide(7, -3));
