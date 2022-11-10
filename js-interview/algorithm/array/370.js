/**
 * 370. 区间加法
 */

function Difference(nums) {
    this.diff = new Array(nums.length).fill(0)
    this.diff[0] = nums[0]
    for(let i = 1; i< nums.length; i++) {
        this.diff[i] = nums[i] -nums[i-1]
    }
}

Difference.prototype.increment = function (i, j, val) {
    this.diff[i] +=val
    if (j + 1 < this.diff.length) {
        this.diff[j+1] -= val
    }
}
Difference.prototype.result = function () {
    let res = new Array(this.diff.length).fill(0)
    res[0] = this.diff[0]
    for(let i = 1; i< this.diff.length;i++) {
        res[i] = res[i-1] + diff[i]
    }
    return res
}