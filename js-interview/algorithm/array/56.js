/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    const ret = []
    intervals.sort((a,b) => a[0] - b[0])
    for(let i = 0;i < intervals.length; i++) {
        const a = intervals[i]
        if (ret.length ===0 || ret[ret.length -1][1]<a[0]) {
            ret.push(intervals[i])
        } else {
            ret[ret.length -1 ][1] = Math.max(ret[ret.length -1][1], a[1])
        }
    }
    return ret
};