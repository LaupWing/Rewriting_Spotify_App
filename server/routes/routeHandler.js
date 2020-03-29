const router = new require('express').Router()

const auth = require('../middleware/auth')

// GET
const login_get = require('./GET/login')
const categories_get = require('./GET/categories')
const categorie_get = require('./GET/categorie')

router
    .get('/categorie', auth, categories_get)
    .get('/login', login_get)
    .get('/categorie/:id', auth, categorie_get)

module.exports = router