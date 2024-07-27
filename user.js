const express=require("express")
const router=express.Router();
const usermiddleware=require("./middlewareuser");
const { user }=require("./database2");
const { course }=require("./database2");

router.post('/signup',function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    user.create({
        username,
        password

    })
    res.json({
        msg:"user created succesfully"
    })
})
router.get("/courses",async function(req,res){
    const response=await course.find({});
    res.json({
        courses:response
    })

})
router.post("/courses/:courseid",usermiddleware,async function(req,res){
    const courseid=req.params.courseid;
    const username=req.headers.username;
    await user.updateOne({
        username:username
    }, {
        "$push":{ 
            purchasedcourses:courseid
        }
       
    })
    res.json({
        msg:"course added "
    })

})
router.get('/purchasedCourses',usermiddleware,async function(req,res){
    const x=await user.findOne({
        username: req.headers.username
    });

    console.log(x.purchasedcourses);
    const courses=await course.find({
        _id:{
            "$in": x.purchasedcourses

        }
    })
    res.json({
        "courses":courses
    })

})
module.exports=router;