const spotify = require('../../api/spotify')

module.exports = async (req, res) => {
    const categorie = await spotify.getCategorie(req.session.acces_token, req.params.id)
    console.log(categorie)
    res.send('categorie')
}