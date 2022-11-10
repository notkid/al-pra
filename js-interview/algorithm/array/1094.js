/**
 * 1094. 拼车
 */
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
 var carPooling = function(trips, capacity) {
    const nums = new Array(1001).fill(0)
    const df = new Difference(nums)
    for(let trip of trips) {
        df.increment(trip[1], trip[2] -1 , trip[0] )
    }
    const res = df.result()
    for(let i = 0; i< res.length; i++) {
        if (capacity < res[i]){
            return false
        }
    }
    return true
};


function Difference(nums) {
    this.diff = new Array(nums.length).fill(0)
    // this.diff[0] = nums[0]
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
        res[i] = res[i-1] + this.diff[i]
    }
    return res
}