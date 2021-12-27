/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
 var findReplaceString = function(s, indices, sources, targets) {
    const n = s.length, match = new Array(n).fill(-1)
    for (let i = 0; i < indices.length ;i ++) {
        const ix = indices[i]
        if (s.substring(ix, ix + sources[i].length) === sources[i]) {
            match[ix] = i
        }
    }
    let ans = '', ix = 0
    while (ix < n) {
        if (match[ix] >= 0) {
            ans += targets[match[ix]]
            ix += sources[match[ix]].length
        } else {
            ans += s[ix++]
        }
    }
    return ans


};