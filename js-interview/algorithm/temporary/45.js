/**
 * 
 * 
 * 跳跃游戏II
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    let maxPos = 0, end= 0,step = 0
    for (let i = 0; i < nums.length - 1; i ++ ) {
         maxPos = Math.max(maxPos, i + nums[i])
         if (i===end) {
             end = maxPos
            step++
         }
    }
    return step
};