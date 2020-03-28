const config = require('../config')
module.exports = (req, res) => {
    res.render(config.template, {
        page: 'login',
        mainId: 'login',
        activeLink: 'login'
    })
}