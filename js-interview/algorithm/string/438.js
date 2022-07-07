/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    let need = {}, window= {}
    for (let s of p) {
        need[s] = (need[s] || 0) + 1
    }

    let left = 0, right = 0, valid = 0,res = []
    while(right < s.length) {
        const d = s[right]
        right ++

        if (need[d]) {
            window[d] = ( window[d] || 0) + 1
            if (window[d] === need[d]) {
                valid ++ 
            }
        }

        while(right-left >= p.length) {
            if (valid=== Object.keys(need).length) {
                res.push(left)
            }

            const x = s[left]
            left ++
            if (need[x]) {
                if (window[x] === need[x]) {
                    valid --
                }
                window[x]--
            }
        }
    }
    return res
};