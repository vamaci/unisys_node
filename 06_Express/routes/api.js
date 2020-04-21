var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const {readData, writeData} = require('../api/api.js')


function newID (users) {
    let ides = users.map(item => item.id)
    ides.sort( (a,b) => a-b )
    return Number(ides[ides.length-1])+1
}

router.get('/', async function(req, res, next) {
    try {
        const users = await readData()
        res.send(users);
    } catch (err) {
        console.log(err)
    }
});

router.get('/:id', async function(req, res, next) {
    try {
        const users = await readData()
        const userNum = users.findIndex( item => item.id == req.params.id)
        if(userNum < 0) { throw( 404 ) }
        res.send(users[userNum]);
    } catch (err) {
        console.log(err)
        next(createError(err))
    }
});

router.post('/', async function(req, res, next) {
    try {
        const users = await readData()
        const newUser = req.body
        newUser.id = newID(users)
        users.push(newUser)
        await writeData(users)
        res.send(users[users.length-1])
    } catch (err) {
    }
});

router.put('/:id', async function(req, res, next) {
    try {
        const users = await readData()
        const userNum = users.findIndex( item => item.id == req.params.id)
        if(userNum < 0) { throw( 403 ) }
        const id = users[userNum].id
        users[userNum] = req.body
        users[userNum].id = id
        await writeData(users)
        res.send(users[userNum]);
    } catch (error) {
        console.log('No existe.')
        res.send({Error: err, msg: 'No existe el registro'+ req.params.id})
    }
});

router.delete ('/:id', async function(req, res, next) {
    const users = await readData()
    let userNum = users.findIndex( item => item.id == req.params.id)
    users.splice(userNum, 1)
    await writeData(users)
    res.send({});
});

module.exports = router;