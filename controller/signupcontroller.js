import myAuthModel from "../model/authmodel.js";
import bcrypt from "bcrypt";

export const signup=async(req,res)=>{
    
    try{
        const {fullname,email,password}=req.body;
        const checkuser=await myAuthModel.findOne({email});
        if(checkuser){
            return res.status(400).json({message:"user is not valid"})
        }

        const hashpassword=await bcrypt.hash(password,10)
        const newuser=new myAuthModel({
            fullname,
            email,
            password:hashpassword
            
        })
         
       await newuser.save()
       res.status(200).json({message:"new user created succesfully"})


    }
    catch(error){
         res.status(500).json({message:"Internal server error"})
    }

}


export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await myAuthModel.findOne({email});
        const isMatch=await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:"username and password is not valid"})
        }
        else{
            res.status(200).json({message:"Login successfully",user:{
                _id:user._id,
                email:user.email
            }})
        }
    }
    catch(error){
        res.status(500).json({message:"Internal server error"})
    }

}