const spotify = require('../../api/spotify')
const config = require('../config')

module.exports = async (req, res) => {
    const categorie = await spotify.getCategorie(req.session.acces_token, req.params.id)
    console.log(categorie.playlists.items)
    res.render(config.template, {
        page: 'categorie',
        playlists: categorie.playlists.items
    })
}