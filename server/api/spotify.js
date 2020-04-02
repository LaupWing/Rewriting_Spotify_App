const fetching = require('./fetch')

module.exports = class {
    static async getCategories(acces_token) {
        const settings = {
            endpoint: 'browse/categories?offset=0&limit=50',
            acces_token
        }
        const categories = await fetching(settings)
        return categories
    }
    static async getCategorie(acces_token, category_id) {
        const settings = {
            endpoint: `browse/categories/${category_id}/playlists`,
            acces_token
        }
        const categorie = await fetching(settings)
        return categorie
    }
    static async getUserInfo(acces_token) {
        const settings = {
            endpoint: 'me',
            acces_token
        }
        const me = await fetching(settings)
        return me
    }
    static async getUsersList(acces_token) {
        const settings = {
            endpoint: 'me/playlists',
            acces_token
        }
        const my_list = await fetching(settings)
        return my_list
    }
}