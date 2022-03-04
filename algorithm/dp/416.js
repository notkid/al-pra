// var canPartition = function (nums) {
//     const total = nums.reduce((a, b) => a+b, 0)
//     if (total % 2 > 0) return false
//     const sum = total / 2, n = nums.length,
//     dp = new Array(n).fill([...new Array(n).fill(false)])
//     for (let i =0;i<n;i ++) {
//         dp[i][0] =true
//     }
//     for(let i = 1; i<= n; i++) {
//         for (let j = 1; j <= sum;j ++) {
//             if (j - nums[i -1] < 0) {
//                 dp[i][j] = dp[i-1][j]
//             } else {
//                 dp[i][j] = dp[i-1][j] || dp[i- 1][j - nums[i-1]]
//             }
//         }
//     }
//     return dp[n][sum]
//  }

var canPartition = function (nums) {
    const total = nums.reduce((a, b) => a+b, 0)
    if (total % 2 > 0) return false
    const sum = total / 2, n = nums.length,
    dp = new Array(sum + 1).fill(false)
        dp[0] =true

    for(const num of nums) {
        // for (let j =0; j<=sum; j++) {
        //     if (j-num >=0) {
        //         dp[j] = dp[j] || dp[j -num]
        //     }
        // }
        for (let j =sum; j>=sum; j--) {
            if (j-num >=0) {
                dp[j] = dp[j] || dp[j -num]
            }
        }
    }
    console.table(dp)
    return dp[sum]
 }

 console.log(canPartition(
    [1,2,5]))