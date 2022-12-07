/**
 * 剑指 Offer 58 - I. 翻转单词顺序
 */

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ')
};