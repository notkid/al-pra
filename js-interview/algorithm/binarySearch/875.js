/**
 * 875. 爱吃香蕉的珂珂
 * 
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    var f = (piles, x) => {
        let hours = 0
        for(let i =0 ; i < piles.length; i ++) {
            hours += Math.ceil(piles[i] / x)
        }
        return hours
    }
    let left = 1, right = 1000000000 + 1
    while(left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (f(piles, mid) <= h) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};