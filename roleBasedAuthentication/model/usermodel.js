import mongoose from "mongoose";

const userSchema=new mongoose.Schema({

    username:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    role:{
       type:String,
       enum:["user","manager","admin"]
    }
})

const UserModel=mongoose.model("myrole",userSchema);
export default UserModel;