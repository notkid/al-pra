/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
     const ret = [],track = []
    var backtrack = (n, k,start,track ) => {
        if (k === track.length) {
            ret.push(track.slice())
            return;
        }

        for (let i = start; i<=n;i ++) {
            track.push(i)
            backtrack(n, k, i + 1, track)
            track.pop()
        }
    }

    backtrack(n, k, 1, track)
    return ret
};

console.log(combine(4, 2))