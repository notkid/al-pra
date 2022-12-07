/**
 * 剑指 Offer 46. 把数字翻译成字符串
 */

/**
 * @param {number} num
 * @return {number}
 */
 var translateNum = function(num) {
    let a = 1, b= 1
    const str = num.toString()

    for(let i = 2; i<= str.length; i++) {
        const tmp  = Number(str[i-2] + str[i-1])
        let c  = tmp >= 10  && tmp <= 25 ? a + b : a
        b = a
        a = c
    }
    return a
};