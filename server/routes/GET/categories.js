const config = require('../config')
const spotify = require('../../api/spotify')
const User = require('../../database/models/User')
const Favorites = require('../../database/models/Favorites')

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
        const fav = new Favorites({
            owner: user._id
        })
        await fav.save()
        await user.save()
    }

    await user.populate('favorites').execPopulate()
    console.log(user.favorites)
    res.render(config.template, {
        page: 'categories',
        categories: categories.categories.items,
        mainId: 'categories',
        activeLink: 'categories'
    })
}
