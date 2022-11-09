/**
 * 
 * 793. 阶乘函数后 K 个零
 * 
 */
/**
 * @param {number} k
 * @return {number}
 */
 var preimageSizeFZF = function(k) {
    var leftBound = (target) => {
        let lo = 0, hi = Number.MAX_SAFE_INTEGER
        while(lo < hi) {
            let mid = Math.floor((hi - lo) /2 + lo)
            if (trailingZeros(mid) < target) {
                lo = mid + 1
            } else if (trailingZeros(mid) > target) {
                hi = mid
            } else {
                hi = mid
            }
        }
        return lo
    }
        var rightBound = (target) => {
        let lo = 0, hi = Number.MAX_SAFE_INTEGER
        while(lo < hi) {
            let mid = Math.floor((hi - lo) /2 + lo)
            if (trailingZeros(mid) < target) {
                lo = mid + 1
            } else if (trailingZeros(mid) > target) {
                hi = mid
            } else {
                lo = mid  +1
            }
        }
        return lo - 1
    }
    var trailingZeros = (n) => {
        let res = 0
        for(let d = n;d /5 > 0; d=Math.floor(d/5)) {
            res += Math.floor(d/5)
        }
        return res
    }
    return rightBound(k) - leftBound(k) + 1
};