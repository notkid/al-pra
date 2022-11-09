/**
 * 392. 判断子序列
 * 
 */

 s = "abc", t = "ahbgdc"

 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let left = 0, right = 0
    while(left < s.length && right < t.length) {
        if (s[left] === t[right]){
            left++
        }
        right++
    }
    if (left === s.length) return true
    return false
}

console.log(isSubsequence(s, t))