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
    static async getUserInfo(acces_token) {
        const settings = {
            endpoint: 'me',
            acces_token
        }
        const me = await fetching(settings)
        return me
    }
}