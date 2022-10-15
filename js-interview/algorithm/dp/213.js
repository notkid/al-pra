/**
 * 
 * 213. 打家劫舍 II
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])

    var robRange = (nums, start, end) => {
        let dp0 = nums[start], dp1 = Math.max(nums[start], nums[start + 1])
        for(let i = start + 2; i<end; i++ ) {
            let tmp = Math.max(dp1, dp0 + nums[i])
            dp0 = dp1
            dp1 = tmp
        }
        return dp1
    }

    return Math.max(robRange(nums, 0, nums.length -1), robRange(nums, 1, nums.length))
};