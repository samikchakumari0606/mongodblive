import express from "express";
import { signup } from "../controller/signupcontroller.js";
const authroute=express.Router();

authroute.post("/signup",signup)

export default authroute