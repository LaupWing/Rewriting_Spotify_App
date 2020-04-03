const User = require('./models/User')
const Favorites = require('./models/Favorites')
const Records = require('./models/Records')

module.exports = async (me, req) => {
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
        const records = new Records({
            owner: user._id
        })
        await fav.save()
        await records.save()
        await user.save()
    }

    await user.populate('favorites').execPopulate()
    await user.populate('records').execPopulate()
}