/**
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
    let ans = '', i = 0
    while (i<s.length) {
        console.log(i)
        if (s[i+2] === '#') {
            ans += String.fromCharCode('a'.charCodeAt() + Number(s[i] +s[i+1]) -1 )
            i=i+2
        } else {
            ans += String.fromCharCode('a'.charCodeAt() + Number(s[i])- 1)
        }
        i++
    }
    return ans
};
//"jkab"

console.log(freqAlphabets("10#11#12"), )