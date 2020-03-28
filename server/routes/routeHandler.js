const router = new require('express').Router()

const auth = require('../middleware/auth')

// GET
const login_get = require('./GET/login')
const home_get = require('./GET/home')
const categorie_get = require('./GET/categorie')

router
    .get('/', auth, home_get)
    .get('/login', login_get)
    .get('/categorie/:id', auth, categorie_get)

module.exports = router