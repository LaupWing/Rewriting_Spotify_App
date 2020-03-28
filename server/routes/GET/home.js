const config = require('../config')
const spotify = require('../../api/spotify')

module.exports = async (req, res) => {
    const categories = await spotify.getCategories(req.session.acces_token)
    console.log(categories.categories.items[0])
    const me = await spotify.getUserInfo(req.session.acces_token)
    console.log(me)
    res.send('home')
}
