/**
 * 
 * 45. 跳跃游戏 II
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    let maxPosition = 0
    let n = nums.length
    let step = 0
    let end = 0
    for(let i = 0; i< n-1;i ++) {
        maxPosition = Math.max(maxPosition, i + nums[i])
        if (end === i ) {
            end = maxPosition
            step ++
        }
    }
    return step

};
