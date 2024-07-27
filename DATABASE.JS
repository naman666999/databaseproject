

const express=require("express");
const bodyParser=require("body-parser")
const app=express();
const adminrouter=require("./admin")
const userrouter=require("./user")

app.use(bodyParser.json());
app.use("/admin",adminrouter);
app.use("/user",userrouter);


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})