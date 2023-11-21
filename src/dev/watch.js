const fs = require('fs')
const path = require('path')
const { exec } = require('child_process') 
const { getFiles } = require('./getAllSubDirs')

const config = require(path.resolve(__dirname, '../../config.json'))

const dir = path.resolve(__dirname, '../../' + (config?.paths?.app ?? 'app'))

console.log('Watching ' + dir)
// fs.watch(process.argv[2], async (type) => {
  
//   let now = Date.now()
//   console.clear()
//   console.log(type + ' ' + process.argv[2] + ' has changed compiling changes!')
//   await exec('node src/compiler.js -f ' + process.argv[2] + ' -o .\\app\\index.js', (err, out, stderr) => {
//     console.error(err ?? '', stderr ?? '')
//     console.log('Done!')
//   })
  
// })

fs.watch(dir, { recursive: true } , (type, file) => {
  if (path.extname(file) === '.zq') {
    exec(`node src/compiler.js -f app/routes/${file} -o app/routes/${file.replace(/.zq/g, '.js')}`, (err, out, stderr) => {
      console.error(err ?? '', stderr ?? '')
      console.log('Done!')
    })
  }
})