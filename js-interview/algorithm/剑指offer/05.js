/**
 * 剑指 Offer 05. 替换空格
 */

/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    let ret = ''
    for(let ch of s) {
        if (ch === ' ') {
            ret+='%20'
        } else {
            ret+=ch
        }
    }
    return ret
};