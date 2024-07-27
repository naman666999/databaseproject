const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://naman:Eq2VuFy1k7GhqVHster0.cx5ua9x.mongodb.net/")
const adminschema=new mongoose.Schema({
    username:String,
    password:String

});
const userschema=new mongoose.Schema({
    username:String,
    password:String,
    purchasedcourses:{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'course'
    }
})
const courseschema=new mongoose.Schema({
    title:String,
    description:String,
    imageLink :String,
    price:Number 
})
const admin=mongoose.model('admin',adminschema);
const user=mongoose.model('user',userschema);
const course=mongoose.model('course',courseschema)
module.exports={
    admin,
    user,
    course
}