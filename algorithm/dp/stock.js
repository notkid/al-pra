
/**
 * 
 * 121
 * 
 * @param {*} prices 
 * @returns 
 */

function maxProfit(prices) {
    let maxProfit = 0
    let minPrice = prices[0]
    for (let i = 0; i< prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else if(maxProfit < prices[i] - minPrice){
            maxProfit  = prices[i] - minPrice
        }
    }
    return maxProfit
}

/**
 * 122
 * 
 * 0 1 2 3 4 5
 * 0 0 
 * 1 -p[0]
 * dp[i][0] = dp[i-1][]
 */

function maxProfit122(prices) {

}