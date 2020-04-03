const spotify = require('../../api/spotify')
const config = require('../config')

module.exports = async (req, res) => {
    const categorie = await spotify.getCategorie(req.session.acces_token, req.params.id)
    console.log(req.session.user)
    console.log(req.session.favorites)
    console.log(req.session.records)
    res.render(config.template, {
        page: 'playlists',
        playlists: 'items' in categorie.playlists ? categorie.playlists.items : [],
        mainId: 'categorie',
        activeLink: 'categories'
    })
}