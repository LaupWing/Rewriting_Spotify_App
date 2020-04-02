const spotify = require('../../api/spotify')
const config = require('../config')

module.exports = async (req, res) => {
    const my_list = await spotify.getUsersList(req.session.acces_token)
    console.log(my_list.items[0])
    res.render(config.template, {
        page: 'my_list',
        mainId: 'my_list',
        activeLink: 'my_list',
        my_list: my_list.items.filter(item => item.tracks.total !== 0)
    })
}