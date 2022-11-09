/**
 * 42. 接雨水
 * 
 */

/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {

    let left = 0, right = height.length -1
    let lMax = 0, rMax = 0, ans = 0
    while(left <= right) {
        lMax = Math.max(lMax, height[left])
        rMax = Math.max(rMax, height[right])
        if (lMax < rMax) {
            ans +=lMax - height[left]
            left++
        } else {
            ans +=rMax - height[right]
            right--
        }
    }
    return ans
};