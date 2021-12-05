/**
 * 
 * 402. 移掉 K 位数字
 * 
 * 
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
     const indexArr = []
     let ans = ''
    for (let i=0;i< num.length;i++) {
        while(indexArr.length > 0 && indexArr[indexArr.length -1] >num[i] && k) {
            indexArr.pop()
            k--
        }
        indexArr.push(num[i])
    }
    for(;k>0;k--) {
         indexArr.pop()
    }
    let leadingZero = true
    for (let digit of indexArr) {
        if (leadingZero && digit === '0') {
            continue
        }
        leadingZero = false
        ans += digit
    }
    return ans === '' ? '0': ans
};
let num = 10200,k=1
removeKdigits(num, k)