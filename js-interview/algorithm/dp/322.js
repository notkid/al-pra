/**
 * 
 * 322. 零钱兑换
 * 
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    const memo = []

    const dp = (coins, n) => {
        if (memo[n] ) return memo[n];
        if (n < 0) return -1;
        if (n === 0) return 0;
       
        let res = Infinity;
        for(let coin of coins) {
            let subProblem = dp(coins, n - coin)
            if (subProblem === -1) continue
            res = Math.min(res, subProblem + 1)
        }
        memo[n] = res === Infinity ? -1 : res
        return memo[n]
    }
    return dp(coins, amount)
};

var coinChange2 = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for(let i = 1; i<= amount; i++) {
        for(let coin of coins) {
            if (i -coin < 0) continue
            dp[i] = Math.min(dp[i], dp[i-coin] + 1)
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}