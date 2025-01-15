import express from "express";
import dotenv from "dotenv";
import { dbconnect } from "./config/dbconnect.js";
import mycurdroute from "./route/curdroute.js";
import studentroute from "./route/studentroute.js";
import authroute from "./route/authroute.js";

dotenv.config();

//samikchaprasad0606
//uOY9dxMXCKIlbH5q

const app=express();
dbconnect();
app.use(express.json())
app.use("/curd",mycurdroute)
app.use("/student",studentroute)
app.use("/auth",authroute)


let PORT=process.env.PORT||3000



app.get("/",(req,res)=>{
    res.send("home page")
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})