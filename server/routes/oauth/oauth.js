const express = require('express')
const request = require('request')
const querystring = require('querystring')
const router = express.Router()
require('dotenv').config()

const redirect_uri =
    process.env.REDIRECT_URI || 'http://localhost:8888/spotify/callback'

router
    .get('/spotify/login', function (req, res) {
        res.redirect(
            'https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: process.env.SPOTIFY_CLIENT_ID,
                scope: 'user-read-private user-read-email',
                redirect_uri
            })
        )
    })
    .get('/spotify/callback', function (req, res) {
        const code = req.query.code || null
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                Authorization:
                    'Basic ' +
                    new Buffer.from(
                        process.env.SPOTIFY_CLIENT_ID +
                        ':' +
                        process.env.SPOTIFY_CLIENT_SECRET
                    ).toString('base64')
            },
            json: true
        }
        request.post(authOptions, function (error, response, body) {
            const access_token = body.access_token
            const uri = process.env.FRONTEND_URI || 'http://localhost:8888/categories'
            req.session.acces_token = access_token
            res.redirect(uri)
        })
    })

module.exports = router
