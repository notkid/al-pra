/**
 * 
 * 
 * 1371. 每个元音包含偶数次的最长子字符串
 * 
 */


/**
 * @param {string} s
 * @return {number}
 */
 var findTheLongestSubstring = function(s) {
    const dict = new Map([
        ['a', 0],
        ['e', 0],
        ['i', 0],
        ['o', 0],
        ['u', 0],
    ])
    for(let i of s) {
        if (dict.get(i) !== undefined) {
            dict.set(i, dict.get(i)++%2)
        }
    }
    while(dict.values().some(d => d===1)) {
        for (let [k,v] of dict) {
            if (v === 1) {
                
            }
        }
    }
};