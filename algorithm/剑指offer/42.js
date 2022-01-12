/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function (nums) {
    const dp = new Array(nums).fill(0)
    let ret = 0, cur = 0
    for (let i = 1; i < nums.length; i++) {
        cur = Math.max(cur + nums[i],nums[i] )
        ret = Math.max(ret, cur)
    }
    return ret
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))