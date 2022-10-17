/**
 * 
 * 188. 买卖股票的最佳时机 IV
 * 
 */

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k,prices) {
    let max_k = k, n = prices.length
    const dp = new Array(n).fill(0).map(_ => new Array(max_k + 1).fill(0).map(_ => new Array(2).fill(0)))
    for(let i = 0; i < n; i++) {
        for(let k = max_k; k >=1 ;k--) {
            if (i -1 == -1) {
                dp[i][k][0] = 0
                dp[i][k][1] = - prices[i]
                continue
            }
            dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
            dp[i][k][1] = Math.max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
        }
    }
    return dp[n-1][max_k][0]
};