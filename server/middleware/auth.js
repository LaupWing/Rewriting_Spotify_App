module.exports = (req,res,next)=>{
    if(req.sessions.acces_token){
        next() 
    }else{
        res.redirect('/login')
    }
}