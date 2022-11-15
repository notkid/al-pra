/**
 * 1541. 平衡括号字符串的最少插入次数
 * 
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
 var minInsertions = function(s) {
    let res = 0, need = 0 
    for(let i = 0; i< s.length; i++) {
        if (s[i] === '(') {
            need +=2
            if (need % 2 ===1) {
                res ++
                need--
            }
        }
        if (s[i] === ')') {
            need--
            if (need === -1) {
                res++
                need = 1
            }
        }
    }
    return res + need
};