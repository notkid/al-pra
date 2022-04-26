/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
 var addToArrayForm = function(num, k) {
    let i = num.length - 1
    const ret = []
    for(let i = num.length -1; i >=0;i --) {
        let sum = num[i] + k % 10
        k = Math.floor(k / 10)
        if (sum >= 10) {
            k++
            sum -=  10
        }
        ret.push(sum)
    }
    for(; k> 0;k = Math.floor(k /10)) {
        ret.push(k % 10)
    }
    ret.reverse()
    return ret
};