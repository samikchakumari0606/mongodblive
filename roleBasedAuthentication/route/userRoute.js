import express from "express";
import { signup } from "../controller/auth.js";

const myRoute=express.Router();

myRoute.post("/signup",signup)

export default myRoute;