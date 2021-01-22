/**
 * 
 * bm
 * https://zhuanlan.zhihu.com/p/63596339
 * 
 */


function generatebc(pattern) {
    const bc = new Array(265).fill(-1)
    for (let i = 0; i < pattern.length; i++) {
        const index = pattern[i].charCodeAt()
        bc[index] = i
    }
    return bc
}


function generateGS(pattern) {
    const len = pattern.length
    const suffix = new Array(len).fill(-1)
    const prefix = new Array(len).fill(false)
    for (let i = 0; i < len - 1; i++) {
        let j = i;
        let k = 0; // 公共后缀子串长度
        while (j >= 0 && pattern[j] === pattern[len - 1 - k]) {
            j--;
            k++;
            suffix[k] = j + 1
        }
        if (j === -1) {
            prefix[k] = true
        }
    }
    return {
        suffix,
        prefix
    }
}
function moveByGS(badCharStartIndex, patternLength, suffix, prefix) {
    let k = patternLength - badCharStartIndex - 1 // 好后缀长度
    // 完全匹配
    if (suffix[k] !== -1) {
        return badCharStartIndex - suffix[k] + 1
    }
    // 部分匹配
    for (let r = badCharStartIndex + 2; r <= patternLength - 1; r++) {
        if (prefix[patternLength - r]) {
            return r
        }
    }
    return patternLength
}
function Bm(main, pattern) {
    if (main.length === 0 || pattern.length === 0 || pattern.length > main.length) {
        return -1
    }
    const mainLen = main.length
    const patternLen = pattern.length
    const bc = generatebc(pattern)
    const { suffix, prefix } = generateGS(pattern)
    let step = 1
    // i, start index of main string
    for (let i = 0; i <= mainLen - patternLen; i = i + step) {
        let substr = main.slice(i, i + patternLen)
        const { patternBadCharIndex, mainBadCharIndex } = findBadChar(substr, pattern, bc)
        let stepForBC = mainBadCharIndex - patternBadCharIndex
        if (mainBadCharIndex === -1) { // mainBadCharIndex 坏字符出现的位置， 为 -1 时说明没有坏字符，在开始位置就匹配了
            return i
        }
        let stepForGS = -1
        if (mainBadCharIndex < patternLen - 1) {
            stepForGS = moveByGS(patternBadCharIndex, patternLen, suffix, prefix)
        }
        step = Math.max(stepForBC, stepForGS)
    }
    return -1;
}


function findBadChar(substr, pattern, bc) {
    let len = substr.length - 1
    let j = -1 //记录坏字符主串中的下标
    let k = -1 // 记录模式串中对应的坏字符下标
    let badChar = '' // 记录坏字符
    for (let i = len; i >= 0; i--) {
        if (substr[i] !== pattern[i]) {
            j = i
            badChar = substr[i]
            break
        }
    }
    if (j > 0) {
        k = bc[badChar.charCodeAt()]
    }
    return {
        patternBadCharIndex: k,
        mainBadCharIndex: j
    }
}

console.log('查询结果为: ' + Bm('yaoyaozhuona', 'zhuo'))