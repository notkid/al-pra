/**
 * 22. 括号生成
 */

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const res = [],track = []
    var backtrack = (left, right, n ,track) => {
        if (track.length === n * 2) {
            res.push(track.join(''))
            return
        }
        if (left < n) {
            track.push('(')
            backtrack(left+1, right, n, track)
            track.pop()
        }
        if (right < n) {
            track.push(')')
            backtrack(left, right + 1, n ,track)
            track.pop()
        }
    }
    backtrack(0, 0, n, track)
    return res
};