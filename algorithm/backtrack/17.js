
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) return []
    const n = digits.length, ret = [], track = [], dict = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }

    const backtrack = (digits, i, track) => {
        if (i === n) {
            ret.push(track.join(''))
            return
        }
        const digit = digits[i]
        let substr = dict[digit]
        for (let s of substr) {
            track.push(s)
            backtrack(digits, i + 1, track)
            track.pop()
        }
    }

    backtrack(digits, 0, track)
    return ret
};

console.log(letterCombinations('23'))