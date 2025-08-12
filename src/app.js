const express=require("express");
const app=express();
 

app.post("/user",(req,res) =>{
   res.send({firstname:"surya" ,lastname:"dev"});
})
app.get("/user",(req,res) => {
    res.send("userprfile is showing");
})

app.delete("/user",(req,res)=>{
   res.send("deleted successfully");
})
 app.use((req,res) =>{
    res.send("server  is running");
 }); 

 app.listen(3000,() => {
    console.log("server is running on port number 3000 :")
 });
