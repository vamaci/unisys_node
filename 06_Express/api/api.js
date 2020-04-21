const fs = require('fs')
const file = './api/data.json'


function readData () {
    return new Promise( (resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(JSON.parse(data))
        })
    })
}


function writeData(obj) {
    return new Promise( (resolve, reject) => {
        fs.writeFile(file, JSON.stringify(obj), (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

module.exports.readData = readData
module.exports.writeData = writeData
