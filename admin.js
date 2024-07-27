const express=require("express");
const adminmiddleware=require("./middlewareadmin");
const { admin }=require("./database2");
const { course }=require("./database2");
const router=express.Router();


router.post('/signup',async function(req,res){
   const username=req.body.username;
   const password=req.body.password;

   await admin.create({
    username:username,
    password:password

   })
   
   res.json({
         msg:"admin created succesfully"
      }) 

})


router.post('/courses',adminmiddleware,async function(req,res){
   const title=req.body.title;
   const description=req.body.description;
   const imagelink=req.body.imaglink;
   const price=req.body.price;

   const newcourse=await course.create({
      title,
      description,
      imagelink,
      price


   })
   res.send({
      message:'course created succesfully',courseId: newcourse._id
   })

})

router.get('/courses',adminmiddleware,async function(req,res){
   const response=await course.find({});
   res.json({
      courses:response
   })
})

module.exports=router;
   

