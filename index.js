import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"

dotenv.config();

//samikchaprasad0606
//uOY9dxMXCKIlbH5q

const app=express();

let PORT=process.env.PORT||3000
let URL=process.env.MONGO_URL

   try{
         mongoose.connect(URL) ;
         console.log("database connected") 
   }
   catch(error){
              console.log("error",error)
   }


app.get("/",(req,res)=>{
    res.send("home page")
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})