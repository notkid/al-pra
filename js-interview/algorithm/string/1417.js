
/**
 * @param {string} s
 * @return {string}
 */
 var reformat = function(s) {
     let valid = 0, ret = new Array(s.length)
    for(const substr of s) {
        if (substr <=9) {
            valid ++
        } else {
            valid --
        }
    }
    if (Math.abs(valid) >1) return ''
    let x = 0, y =1
    if (valid == -1) {
        x = 1, y =0
    } 
    for(let i=0;i<s.length;i++) {
        if (s[i] <=9) {
            ret[x] = s[i]
            x+=2
        } else {
            ret[y] = s[i]
            y+=2
        }
    }
    return ret.join('')
};

console.log(reformat("covid2019"))