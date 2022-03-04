
/**
 * 915. 分割数组
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var partitionDisjoint = function(nums) {
    const maxLeft = [], minRight = []


    let m = nums[0]
    for (let i =0;i< nums.length; i++) {
        m = Math.max(m, nums[i])
        maxLeft[i] =m
        
    }

    m = nums[nums.length -1]
    for (let i =nums.length-1;i >= 0; i--) {
        m = Math.min(m, nums[i])
        minRight[i] =m
    }
    for (let i = 1;i<nums.length;i ++) {
        if (maxLeft[i-1]<=minRight[i]) {
            return i
        }
    }
    return false

};