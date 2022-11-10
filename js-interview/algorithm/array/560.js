/**
 * 560. 和为 K 的子数组
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    const mp = new Map()
    mp.set(0, 1)

    let pre = 0,count = 0
    for (const x of nums) {
        pre += x
        if (mp.has(pre-k)) {
            count += mp.get(pre-k)
        }
        if (mp.has(pre)) {
            mp.set(pre, mp.get(pre) + 1)
        } else {
            mp.set(pre, 1)
        }
    }
    return count
};