const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes/routeHandler')
const oauth = require('./routes/oauth/oauth')
const path = require('path')
const session = require('express-session')

app
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname,'views'))
    .use(session({
        secret: "Spotify",
        cookie: {secure: false},
        resave: false,
        saveUninitialized: true
    }))
    .use(routes)
    .use(oauth)
    .listen(process.env.PORT, ()=> console.log(`Server is listening to port ${process.env.PORT}`))