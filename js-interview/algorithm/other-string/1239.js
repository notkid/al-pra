/**
 * 
 * 1239. 串联字符串的最大长度
 * 
 */

/**
 * @param {string[]} arr
 * @return {number}
 */
 var maxLength = function(arr) {
    const masks = [0]
    let ans = 0
    for(const s of arr) {
        let mask = 0
        for(let i=0;i<s.length;i++) {
            const a = s[i].charCodeAt() - 'a'.charCodeAt()
            if ((mask>>a) & 1) {
                mask = 0
                break
            }
            mask |= 1 << a
        }
        if (mask ===0) {
            continue
        }
        for (let i =0;i< masks.length;i++) {
            let m = masks[i]
            if ((m & mask) ===0) {
                masks.push(m|mask)
                ans = Math.max(ans, (m|mask).toString(2).split('0').join('').length)
            }
        }
    }
    return ans
};