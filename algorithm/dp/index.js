/*
 * @Author: your name
 * @Date: 2021-03-16 12:51:06
 * @LastEditTime: 2021-03-22 17:28:04
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
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    for (let c of coins) {
        for (let j = c; j< amount+1; j++) {
            dp[j] += dp[j-c]
        }
    }
    return dp[amount]
};

// change(5, [1,2,5])


/**
 * 
 * 1147 
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。两个字符串的「公共子序列」是这两个字符串所共同拥有的子序列。

若这两个字符串没有公共子序列，则返回 0。
 * 
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
     if(!text1 || !text2) return 0
    let n = text1.length
    let m = text2.length
    let dp = new Array(n+1).fill(new Array(m+1).fill(0))
    for(let i = 1; i<= n; i++) {
        for (let j = 1;j <= m; j++) {
            // console.log(text1[i-1] ,text2[j-1])
            if (text1[i-1] ===text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
   
    return dp[n][m]
};

// longestCommonSubsequence("abcde", "ace")

/**
 * 
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    dp = [...triangle[triangle.length -1]]
  
    for(let i = triangle.length-2;i>=0;i--) {
        for(let j =0; j< triangle[i].length;j++) {
            dp[j] = Math.min(dp[j], dp[j+1]) + triangle[i][j]
            // console.log(triangle[i+1][j],`${i}_${j}`, dp)
        }
    }
    return dp[0]
};

// minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])


/**
 * 
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * [-2,1,-3,4,-1,2,1,-5,4]
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
     let pre =0, maxAns = nums[0]
    nums.forEach(x => {
        pre = Math.max(pre+x, x)
        maxAns = Math.max(pre, maxAns)
    })
    return maxAns
};