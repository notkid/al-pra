/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
     let beginIndex = 0, maxLen = 1
     const n = s.length
    const dp = new Array(n).fill(false).map(_ => new Array(n).fill(false))
    for(let i = 0;i < n;i ++) {
        dp[i][i] = true
    }
    for(let L = 2; L <=n; L ++) {
        for(let i =0; i<n;i++) {
            const j = L + i - 1
            if (j>=n) {
                break
            }
            if (s[i] !== s[j]) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i+1][j-1]
                }
            }
            if (dp[i][j] && j -i + 1> maxLen) {
                maxLen = j -i + 1
                beginIndex = i
            }
        }
    }
    // console.table(dp)
    return s.substring(beginIndex, beginIndex +  maxLen)
};

/**
 * 
 * dp[i][j]
 * 
 * 
 */

console.log(longestPalindrome("xaabacxcabaaxcabaax"))