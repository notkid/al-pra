/**
 * 1109. 航班预订统计
 * 
 */

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var corpFlightBookings = function(bookings, n) {
    let nums = new Array(n).fill(0)
    let df = new Difference(nums)
    for(let booking of bookings) {
        df.increment(booking[0] -1, booking[1] -1, booking[2])
    }
    return df.result()
};


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
        res[i] = res[i-1] + this.diff[i]
    }
    return res
}