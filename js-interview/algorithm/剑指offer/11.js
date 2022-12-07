/**
 * 剑指 Offer 11. 旋转数组的最小数字
 */

/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
    let lo = 0
    let hi = numbers.length - 1

    while(lo < hi) {
        const pivot = Math.floor((lo + hi) / 2)
        if (numbers[pivot] < numbers[hi]) {
            hi = pivot
        } else if (numbers[pivot] > numbers[hi]) {
            lo = pivot + 1
        } else {
            hi --
        }
    }
    return numbers[lo]
};