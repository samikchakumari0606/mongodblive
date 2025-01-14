import express from "express";
import dotenv from "dotenv";
import { dbconnect } from "./config/dbconnect.js";
import mycurdroute from "./route/curdroute.js";

dotenv.config();

//samikchaprasad0606
//uOY9dxMXCKIlbH5q

const app=express();
dbconnect();
app.use(express.json())
app.use("/curd",mycurdroute)

let PORT=process.env.PORT||3000



app.get("/",(req,res)=>{
    res.send("home page")
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})