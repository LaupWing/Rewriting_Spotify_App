const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes/routeHandler')
const oauth = require('./routes/oauth/oauth')
const path = require('path')

app
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname,'views'))
    .use(routes)
    .use(oauth)
    .listen(process.env.PORT, ()=> console.log(`Server is listening to port ${process.env.PORT}`))