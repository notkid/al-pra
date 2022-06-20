/**
 *
 * 598. 范围求和 II
 *
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let mina = m,
    minb = n;
  for (let o of ops) {
    mina = Math.min(o[0], mina);
    minb = Math.min(o[1], minb);
  }
  return mina * minb;
};
