import express from "express";
import { getMyStudent } from "../controller/studentcontroller.js";
const studentroute=express.Router();

studentroute.get("/",getMyStudent)

export default studentroute;