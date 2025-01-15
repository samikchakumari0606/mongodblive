import express from "express";
import { getData,postData ,putData} from "../controller/curdcontroller.js";
const mycurdroute=express.Router();


mycurdroute.get("/",getData)
mycurdroute.post("/postData",postData)
mycurdroute.put("/putData/:_id",putData)


export default mycurdroute;
