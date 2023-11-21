

const fs = require('fs')
const config = require('../config.json')


function server() {
    const express = require('express')

    const app = express()

    app.use(express.static('./app/routes'))
    app.use(express.json())



    return {
        app,
        on: function(str, callback) {
            let method = str.split(' ')[0].toLowerCase()
            let endpoint = str.split(' ')[1]

            this.app?.[method]('/api' + endpoint, (req, res) => {
                callback(req, res)
            })
        },
    
        start: function(callback) {

            this.app.listen(process.env.PORT ?? '6969', callback(process.env.PORT ?? '6969'))
        }
    }
}

module.exports = server