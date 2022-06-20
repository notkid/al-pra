const fs = require('fs')

const folderName = './ABC'

const path = require('path')

const folderPath = './'

fs.readdirSync(folderPath)
fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)
})
fs.rmdirSync('./LHY')
// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName)
//   }
// } catch (err) {
//   console.error(err)
// }

// fs.rename('./WQT', './LHY', err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //完成
// })