
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false
    const cnt = new Array(26).fill(0)
    for (let r of magazine ) {
        cnt[r.charCodeAt() - 'a'.charCodeAt()]  ++
    }
    for (let r of ransomNote ) {
        cnt[r.charCodeAt() - 'a'.charCodeAt()]  --
        if (cnt[r.charCodeAt() - 'a'.charCodeAt()] <0) return false
    }
    return true
};