/**
 * 
 * 55. 跳跃游戏
 * 
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let farthest = 0
    let n = nums.length
    for(let i = 0; i< n-1; i++) {
        farthest = Math.max(farthest, i + nums[i])
        if (farthest <= i) {
            return false
        }
    }
    return farthest >= n-1
};