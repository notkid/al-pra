/**
 * 
 * 122. 买卖股票的最佳时机 II
 * 
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let dp_i_0 = 0, dp_i_1 = -Infinity
    for(let i = 0; i< prices.length; i++ ) {
        let tmp = dp_i_0
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
        dp_i_1 = Math.max(dp_i_1, tmp - prices[i])
    }
    return dp_i_0
};