const fetching = require('./fetch')

module.exports = class {
    static async getCategories(accec_token) {
        const settings = {
            endpoint: 'browse/categories',
            accec_token
        }
        const categories = await fetching(settings)
        console.log(categories)
        return categories
    }
}