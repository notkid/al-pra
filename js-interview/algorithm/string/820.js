var minimumLengthEncoding = (words) => {
    const good = new Map(words.map(w => [w, 1]))
    for(const word of words) {
        for (let k = 1; k < word.length; k++) {
            good.delete(word.substring(k))
        }
    }
    let ans = 0
    for(const g of good.keys()) {
        ans += g.length + 1
    }
    return ans
}

console.log(minimumLengthEncoding(["time", "me", "bell"]))