import express from "express";
import { myrelation } from "../controller/relationcontroller.js";

const relationroute=express.Router();

relationroute.post("/rel",myrelation)
// relationroute.post("/mydata",myLirary)


export default relationroute