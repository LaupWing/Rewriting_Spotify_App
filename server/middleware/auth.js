module.exports = (req,res,next)=>{
    if(req.essions.acces_token){
        next() 
    }else{
        res.redirect('/login')
    }
}