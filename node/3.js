const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/1.js')
  stream.pipe(res)
})
server.listen(3000)