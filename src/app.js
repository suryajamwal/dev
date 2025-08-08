const express=require("express");
const app=express();
 
app.use("/profile",(req,res) => {
    res.send("userprofile is showing");
})
 app.use((req,res) =>{
    res.send("server  is running");
 });
 app.listen(3000,() => {
    console.log("server is running on port number 3000 :")
 });
