/**
 * 20. 有效的括号
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const left = []
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for(let str of s ) {
        if (str === '(' || str==='['||str==='{') {
            left.push(str)
        } else {
            if (left.length > 0 && left[left.length -1] === map[str]) {
                left.pop()
            } else {
                return false
            }
        }
    }
    return left.length === 0
};

console.log(isValid('()'))