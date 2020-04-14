const spotify = require('../../api/spotify')
const config = require('../config')

module.exports = async (req, res) => {
    const my_list = await spotify.getUsersList(req.session.acces_token)

    res.render(config.template, {
        page: 'my_list',
        my_list: my_list.items.filter(item => item.tracks.total !== 0)
    })
}