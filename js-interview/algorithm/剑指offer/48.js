/**
 * 剑指 Offer 48. 最长不含重复字符的子字符串
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let window = {}
    let left = 0, right =0,res = 0
    while(right < s.length) {
        let c = s[right]
        right++
        window[c] = (window[c] || 0) + 1

        while(window[c] > 1) {
            window[s[left]]--
            left++
        }
        res = Math.max(res, right -left)
    }
    return res
};