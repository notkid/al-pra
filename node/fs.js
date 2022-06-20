const fs = require('fs')

const rs = fs.createReadStream(`${__dirname}/a.txt`, {
    flags: 'r',
    start: 0,
    highWaterMark: 3
})

rs.on('data', (chunk) => {
    console.log(chunk)
})

rs.on('end', () => {
    console.log('end')
})

rs.on('close', () => {
    console.log('close')
})