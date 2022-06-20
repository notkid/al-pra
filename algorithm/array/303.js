/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
     this.nums = new Array(nums.length + 1).fill(0)
    for (let i = 0 ; i< nums.length; i++) {
        this.nums[i+ 1] = this.nums[i] + nums[i]
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.nums[right + 1] - this.nums[left]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */