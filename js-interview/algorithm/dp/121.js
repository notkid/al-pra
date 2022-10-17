/**
 * 121. 买卖股票的最佳时机
 * 
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let dp_i_0 = 0 , dp_i_1 = -Infinity
    for(let i = 0; i< prices.length; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
        dp_i_1 = Math.max(dp_i_1, -prices[i])
    }
    return dp_i_0
};

const arr = [7,1,5,3,6,4]

console.log(maxProfit(arr))