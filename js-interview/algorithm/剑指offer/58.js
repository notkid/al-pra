/**
 * 剑指 Offer 58 - II. 左旋转字符串
 */

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    return s.slice(n) + s.slice(0,n)
};