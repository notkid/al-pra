/**
 * 1011. 在 D 天内送达包裹的能力
 * 
 */

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 var shipWithinDays = function(weights, days) {

    var f = (weights, x) => {
        let days = 0
        for(let i = 0; i< weights.length;) {
            let cap = x
            while(i < weights.length) {
                if (cap < weights[i]){
                    break
                } else {
                    cap -= weights[i]
                    i++
                }
                
            }
            days++
        }
        return days
    }
    let left = 0, right  = 1
    weights.forEach(weight => {
        left = Math.max(left, weight)
        right +=weight
    })

    while(left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (f(weights, mid) <= days) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};
weights =[1,2,3,4,5,6,7,8,9,10]
days =5
console.log(shipWithinDays(weights, days))