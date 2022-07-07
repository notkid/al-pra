/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
    const MOD = 1000000007;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    let outCounts = 0;
    const dp = new Array(maxMove + 1).fill(
        [...new Array(m).fill(
            [...new Array(n).fill(0)]
        )]
    );
    dp[0][startRow][startColumn] = 1;
    for (let i = 0; i < maxMove; i++) {
        for (let j = 0; j < m; j++) {
            for (let k = 0; k < n; k++) {
                let count = dp[i][j][k];
                if (count > 0) {
                    for (let direction of directions) {
                        let j1 = j + direction[0], k1 = k + direction[1];
                        if (j1 >= 0 && j1 < m && k1 >= 0 && k1 < n) {
                            dp[i + 1][j1][k1] = (dp[i + 1][j1][k1] + count) % MOD;
                        } else {
                            outCounts = (outCounts + count) % MOD;
                        }
                    }
                }
            }
        }
    }
    console.table(dp)
    return outCounts;
}

console.log(findPaths(1, 3, 3, 0, 1))