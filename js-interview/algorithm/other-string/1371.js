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
    const pos = new Array(1<<5).fill(-1)
    let status = 0,ans = 0
    pos[0] = 0
    for(let i =0;i < s.length;i++) {
        let str = s[i]
        if (str === 'a' ){
            status ^= 1 << 0
        }else if(str === 'e' ) {
            status ^= 1 << 1
        }else if(str === 'i' ) {
            status ^= 1 << 2
        }else if(str === 'o' ) {
            status ^= 1 << 3
        }else if(str === 'u' ) {
            status ^= 1 << 4
        }
        if (~pos[status]) {
            ans = Math.max(ans, i+1-pos[status])
        } else {
            pos[status] = i+1
        }
    }
    return ans
};

const c = findTheLongestSubstring('eleetminicoworoep')
// console.log(c,'ffff')