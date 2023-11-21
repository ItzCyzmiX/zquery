const app  = require('./../../src/server')()

app.on('GET /', (req, res) => {
    res.json({
        hello: 'world'
    })
})

app.start(port => console.log(port))