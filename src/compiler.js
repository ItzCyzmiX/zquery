const fs = require('fs')



let path =  ''
let outPath = ''

let args = process.argv
args[0] = ''
args[1] = ''
args = args.filter(n => n)

args.forEach((arg, i) => {
    if (arg === '-f' || arg === '--file') {
        path = args[i+1]
    }

    if (arg === '-o' || arg === '--out') {
        outPath = args[i+1]
    }
})


const file = fs.readFileSync(path).toString()

const start = Date.now()
console.log('Transpiling...')
hasSelector = false
const split = file.split(/(&)/g)

split.forEach((s, i) => {
    if (s === '&') {        
        split[i] = 'Selector.select'
        hasSelector = true
    }
    
});



//const Creator = fs.readFileSync('./creator.js').toString()
const Selector = fs.readFileSync('./selector.js').toString()
const err = fs.readFileSync('./error.js').toString()
const zFetch = fs.readFileSync('./fetch.js').toString()

let str = zFetch + '\n' 

if (hasSelector) {
    str +=  err + '\n' + Selector + '\n'
}

str += split.join('')

fs.writeFileSync(outPath,  str)
console.log('Done in ' + (Date.now() - start) + 'ms!')