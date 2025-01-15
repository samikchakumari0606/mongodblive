import myAuthModel from "../model/authmodel.js";

export const signup=async(req,res)=>{
    
    try{
        const {fullname,email,password}=req.body;
        const checkuser=await myAuthModel.findOne({email});
        if(checkuser){
            return res.status(400).json({message:"user is not valid"})
        }

        const newuser=new myAuthModel({
            fullname,
            email,
            password
        })
         
       await newuser.save()
       res.status(200).json({message:"new user created succesfully"})


    }
    catch(error){
         res.status(500).json({message:"Internal server error"})
    }

}