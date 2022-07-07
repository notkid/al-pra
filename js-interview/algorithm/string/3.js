/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const window = {}

    let left = 0, right = 0, res = 0

    while(right < s.length) {
        const c = s[right]
        right ++
        window[c] =( window[c] || 0) + 1
        while(window[c] > 1) {
            const d = s[left]
            left++
            window[d] --
        }
        res = Math.max(res, right -left)
    }
    return res
};