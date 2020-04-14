const router = new require('express').Router()

const auth = require('../middleware/auth')

// GET
const login_get = require('./GET/login')
const categories_get = require('./GET/categories')
const categorie_get = require('./GET/categorie')
const my_list_get = require('./GET/my_list')

router
    .get('/', login_get)
    .get('/categories', auth, categories_get)
    .get('/categories/:id', auth, categorie_get)
    .get('/my_list', auth, my_list_get)

module.exports = router