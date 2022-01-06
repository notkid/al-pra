/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
     if (strs.length ===0) return ''
     let ret = ''
    for (let i = 0;i<strs[0].length;i++) {
        for (let j = 1;j<strs.length; j++) {
            if (strs[j][i] !== strs[0][i] || i === strs[j].length) {
                return  strs[0].substring(0, i)
            }
        }
    }
    return strs[0]
};