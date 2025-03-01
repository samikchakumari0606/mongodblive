import UserModel from "../model/usermodel.js";
import bcryptjs from "bcryptjs";

export const signup=async(req,res)=>{
    
    try{
        const {username,email,password,role}=req.body;
        const checkuser=await UserModel.findOne({email});
        if(checkuser){
            return res.status(400).json({message:"user is not valid"})
        }

        const hashpassword=await bcryptjs.hash(password,10)
        const newuser=new UserModel({
            username,
            email,
            password:hashpassword,
            role
            
        })
         
        
       await newuser.save()
       res.status(200).json({message:"new user created succesfully"})


    }
    catch(error){
         res.status(500).json({message:"Internal server error"})
    }

}