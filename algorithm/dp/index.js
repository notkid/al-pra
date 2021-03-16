/*
 * @Author: your name
 * @Date: 2021-03-16 12:51:06
 * @LastEditTime: 2021-03-16 19:49:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \leetcode\algorithm\dp\index.js
 */

/**
 * 
 * f(n) => 1, n = 1,
 *         2, n = 2,
 *         f(n-1) +f(n-2),
 *         
 * 
 * 
 * @param {*} n 
 */

function climb(n) {
    let p = 0, q = 0, r = 1
    for (let i = 0; i < n; i++) {
        p = q
        q = r
        r = p + q
    }
    return r
}

/**
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 

天数是n
f(n) => 0, n = 1
        max(f(2) - f(1), 0), n = 2
        f(n-1), 


 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};


/**
 * 198. 打家劫舍
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function (nums) {
    if (nums.length  === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
    let d0 = nums[0], d1 = Math.max(nums[0], nums[1])
    for (let i =2; i < nums.length ; i++) {
        let tmp = d1
        d1 = Math.max(d0 + nums[i], d1)
        d0 = tmp
    }

    return d1
};

/**
 * 213
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length  === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
   
    return Math.max(robRange(nums, 1, nums.length), robRange(nums, 0, nums.length - 1))
};

var robRange = function (nums, start, end) {
    let d0 = nums[start], d1 = Math.max(nums[start], nums[start+1])
    for (let i = start + 2; i< end;i ++) {
        let tmp = d1
        d1 = Math.max(d0 + nums[i], d1)
        d0 = tmp
    }
    return d1
}

/**
 * 
 * 72. 编辑距离
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    let n = word1.length , m = word2.length
    let dp = new Array(n +1).fill().map(() => new Array(m + 1).fill(0))
    for(let i =0;i<= n;i++) {
        dp[i][0] = i
    }
    for(let i = 0;i<=m;i++) {
        dp[0][i] = i
    }
    for(let i = 1; i<= n;i++) {
        for(let j = 1; j<= m; j++) {
            if (word1[i - 1] !== word2[j - 1]) {
                dp[i -1][j -1] = dp[i-1][j-1] + 1
            } 
                dp[i][j] = Math.min(
                    dp[i-1][j-1],
                    dp[i-1][j] + 1,
                    dp[i][j-1] + 1
                ) 
        }
    }
    return dp[n][m]
};


/**
 * 
 * 
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let dp = new Array(n +1).fill().map(() => new Array(m + 1).fill(0))
    for (let i = 1; i< m;i ++) {
        for (let j = 1; j< n; j++) {
            dp[i][j] = dp[i][j-1] + dp[i-1][j]
        }
    }
    return dp[m][n]
};

// let abc = uniquePaths(3, 7)
// console.log(abc)


/**
 * 518. 零钱兑换 II
 * 输入: amount = 5, coins = [1, 2, 5]

 */
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
    let n = coins.length
    let dp = new Array(n+1).fill().map(() => new Array(amount + 1).fill(0))
    for (let i = 0; i<= n; i++) {
        dp[i][0] = 1
    }
    for (let j = 1 ; j<=amount;j++) {
        dp[0][j] = dp[0][j-1] + 1
    }
    for (let i = 1; i<= n;i++) {
        for (let j = 1; j < amount; j++) {
            if (j - coins[i-1] > 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j - coins[i-1]]

            } else {    
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    return dp[n][amount]
};

change(5, [1,2,5])