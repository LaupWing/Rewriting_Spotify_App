const config = require('../config')
const spotify = require('../../api/spotify')
const User = require('../../database/models/User')

module.exports = async (req, res) => {
    const categories = await spotify.getCategories(req.session.acces_token)
    const me = await spotify.getUserInfo(req.session.acces_token)
    let user = await User.findOne({ spotify_id: me.id })

    if (!user) {
        user = new User({
            name: me.display_name,
            email: me.email,
            spotify_id: me.id
        })
        await user.save()
    }

    res.render(config.template, {
        page: 'home',
        categories: categories.categories.items,
        user
    })
}
