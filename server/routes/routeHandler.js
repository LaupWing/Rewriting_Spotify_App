const router = new require('express').Router()

const auth = require('../middleware/auth')

// GET
const login_get = require('./GET/login')
const home_get = require('./GET/home')
const rooms_get = require('./GET/rooms')

router
    .get('/',auth, home_get)
    .get('/rooms',auth, rooms_get)
    .get('/login', login_get)

module.exports = router