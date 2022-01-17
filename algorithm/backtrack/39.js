/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const ret = [], track = []
    const backtrack = (result, candidates, track, idx) => {
        if (idx === candidates.length) return
        if (result === 0) {
            ret.push(track.slice())
            return
        }
        backtrack(result, candidates, track, idx + 1)

        if (result - candidates[idx] >= 0) {
            track.push(candidates[idx])
            backtrack(result - candidates[idx], candidates, track, idx)
            track.pop()
        }
    }

    backtrack(target, candidates, track, 0)
    return ret
};

console.log(combinationSum([2, 3, 6, 7], 7))