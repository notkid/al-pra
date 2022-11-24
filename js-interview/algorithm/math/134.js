/**
 * 134. 加油站
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
    let min = 0, start = 0, n = gas.length
    let sum = 0
    for(let i =0 ;i < n; i++) {
        sum+=gas[i]-cost[i]
        if (sum <min) {
            start = i + 1
            min = sum
        }
    }
    if (sum < 0) {
        return -1
    }

    return start === n? 0: start 

};