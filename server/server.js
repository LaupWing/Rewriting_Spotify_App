const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes/routeHandler')
const path = require('path')

app
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname,'views'))
    .use(routes)
    .listen(process.env.PORT, ()=> console.log(`Server is listening to port ${process.env.PORT}`))