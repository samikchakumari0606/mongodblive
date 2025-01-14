import express from "express";
import { getData,postData } from "../controller/curdcontroller.js";
const mycurdroute=express.Router();

mycurdroute.get("/",getData)
mycurdroute.post("/postData",postData)


export default mycurdroute;
