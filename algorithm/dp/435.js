
/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    const n = intervals.length
    intervals.sort((a, b) => a[0]- b[0])
    const dp = new Array(n).fill(1)
    for (let i = 0; i< n; i++) {
        for (let j=0; j< i;j++) {
            if (intervals[j][1] <= intervals[i][0]) {
                dp[i] = Math.max(dp[i- 1], dp[j] + 1)
            }
        }
    }
    return n - Math.max(...dp)
};

console.log(eraseOverlapIntervals(
    [[1,100],[11,22],[1,11],[2,12]]))