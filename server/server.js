const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes/routeHandler')

app
    .use(routes)
    .listen(process.env.PORT, ()=> console.log(`Server is listening to port ${process.env.PORT}`))