const config = require('../config')
const spotify = require('../../api/spotify')

module.exports = async (req, res) => {
    console.log(req.session.acces_token)
    const categories = await spotify.getCategories(req.session.acces_token)
    console.log(categories)
    res.send('home')
}
