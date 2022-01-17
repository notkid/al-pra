/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const ret = [], track = []
    const backtrack = (openPos, closePos, n, track) => {
        if (track.length === n * 2) {
            ret.push(track.join(''))
            return
        }
        if (openPos < n) {
            track.push('(')
            backtrack(openPos + 1, closePos, n, track)
            track.pop()
        }
        if (closePos < openPos) {
            track.push(')')
            backtrack(openPos, closePos + 1, n, track)
            track.pop()
        }
    }

    backtrack(0, 0, n, track)
    return ret
};

console.log(generateParenthesis(3))