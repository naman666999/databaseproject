const {admin}=require("./database2");


function adminmiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    admin.findOne({
        username:username,
        password:password
    })
    .then(function(value){
        if(value){
            next();
        }else{
            res.status(403) .json({
                msg:"admin dont exits"
            })
        }
    })

}
module.exports=adminmiddleware;