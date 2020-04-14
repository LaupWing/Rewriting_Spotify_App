const config = require('../config')
const spotify = require('../../api/spotify')
const setUser = require('../../database/setUser')

module.exports = async (req, res) => {
    const categories = await spotify.getCategories(req.session.acces_token)
    const me = await spotify.getUserInfo(req.session.acces_token)
    await setUser(me, req)

    res.render(config.template, {
        page: 'categories',
        categories: categories.categories.items,
    })
}
