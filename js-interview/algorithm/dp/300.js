var lengthOfLIS = function (nums) {
    // f(6) = f(5) 
    const n = nums.length
    let ans = 0
    const dp = new Array(n).fill(1)

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {

                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    for (let i = 0; i < n; i++) {
        ans = Math.max(dp[i], ans)
    }
    return ans
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))