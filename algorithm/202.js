/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n,fast = getSum(n)
    while(fast !== 1 && slow !== fast) {
        slow = getSum(n)
        fast = getSum(getSum(fast))
    }
    return fast === 1
};

var getSum = function (n) {
    let sum = 0
    while(n > 0) {
        sum += Math.pow(n %10, 2)
        n = Math.floor(n /10)
    }
    return sum
}

console.log(isHappy(19))