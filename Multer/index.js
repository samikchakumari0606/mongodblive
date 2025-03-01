import express from "express";
import dotenv from "dotenv";
import { dbconnect } from "./config/dbconnect.js";
import multerroute from "./route/multerroute.js";

dotenv.config();

const app=express();
dbconnect();
app.use(express.json());
app.use("/user",multerroute);
app.use("/images",express.static("uploads"));

let PORT=process.env.PORT||3000


app.get("/",(req,res)=>{
    res.send("home page")
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})