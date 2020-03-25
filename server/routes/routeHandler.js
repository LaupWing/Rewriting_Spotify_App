const router = new require('express').Router()

// GET
const login_get = require('./GET/login')
const signup_get = require('./GET/signup')
const home_get = require('./GET/home')
const rooms_get = require('./GET/rooms')

router
    .get('/', home_get)
    .get('/signup', signup_get)
    .get('/rooms', rooms_get)
    .get('/login', login_get)

module.exports = router