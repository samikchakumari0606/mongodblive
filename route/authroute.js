import express from "express";
import { signup ,login} from "../controller/signupcontroller.js";
import { getDetails } from "../controller/signupcontroller.js";
const authroute=express.Router();

authroute.post("/signup",signup)
authroute.post("/login",login)
authroute.post("/jwt",getDetails)

export default authroute