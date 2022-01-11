var alphabetBoardPath = function(target) {
    let ret = ''
    const getCommand = (p1, p2) => {
        let cmd = ''
       let dy =  Math.floor(p2/ 5) - Math.floor( p1 / 5),
       dx =   p2  % 5 - p1 % 5
       if (dy< 0) cmd += 'U'.repeat(-dy)
       if (dx > 0) cmd += 'R'.repeat(dx)
       if (dx < 0) cmd += 'L'.repeat(-dx)
       if (dy > 0) cmd += 'D'.repeat(dy)
        return cmd + '!'
    }
    ret +=getCommand(0, target[0].charCodeAt() - 'a'.charCodeAt())
    for (let i = 0; i< target.length -1 ; i++) {
        const code1 = target[i].charCodeAt() - 'a'.charCodeAt()
        const code2 = target[i+1].charCodeAt() - 'a'.charCodeAt()
        const command = getCommand(code1, code2)
        ret += command
    }
    return ret
};
//"DDR!UURRR!!DDD!"
console.log(alphabetBoardPath("leet"))