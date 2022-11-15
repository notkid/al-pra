/**
 * 921. 使括号有效的最少添加
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
    let res  = 0,need = 0
    for(let i =0; i< s.length ; i++){
        if (s[i] ==='(') {
            need++
        }
        if (s[i] ===')') {
            need--
            if (need === -1) {
                need = 0
                res++
            }
        }
    }
    return res + need
};