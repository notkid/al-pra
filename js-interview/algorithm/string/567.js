
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {

    const need = {}, window = {}

    for (let s of s1) {
        need[s] = (need[s] || 0) + 1
    }

    let left = 0, right =0, start = 0,valid = 0

    while(right < s2.length) {
        const c = s2[right]
        right ++

        if (need[c]) {
            window[c] = (window[c] || 0) + 1
            if (window[c] === need[c]) {
                valid ++
            }
        }

        while(right-left >= s1.length) {
            if (valid === Object.keys(need).length) {
                return true
            }
            const d = s2[left]
            left ++
            if (need[d]) {
                if (window[d] === need[d]) {
                    valid --
                }
                window[d]--
            }
        }
    }
    return false

};