const config = require('../config')
module.exports = (req,res)=>{
    console.log(req.session.acces_token)
    res.send('home')
}