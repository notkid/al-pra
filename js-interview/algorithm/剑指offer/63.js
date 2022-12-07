/**
 * 剑指 Offer 63. 股票的最大利润
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

    const dp = new Array(prices.length).fill([0, 0])
    for(let i = 0; i< prices.length ;i++) {
        if (i -1 <0) {
            dp[i][0] = 0
            dp[i][1] = -prices[i]
            continue
        }
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
        dp[i][1] = Math.max(dp[i-1][1], -prices[i])
    }
    return dp[prices.length -1][0]
};

var maxProfit = function(prices) {
    let dp_0 = 0 , dp_1 = Number.MIN_SAFE_INTEGER
    for(let price of prices ) {
        dp_0 = Math.max(dp_0, dp_1 + price)
        dp_1 = Math.max(dp_1, -price)
    }
    return dp_0
 }