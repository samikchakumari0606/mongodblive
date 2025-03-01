import express from "express";
import dotenv from "dotenv";
import { dbconnect } from "./config/dbconnect.js";
import myRoute from "./route/userRoute.js";

dotenv.config();



const app=express();
dbconnect();
app.use(express.json())
app.use("/auth",myRoute)

let PORT=process.env.PORT||3000



app.get("/",(req,res)=>{
    res.send("home page")
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})