import mongoose from "mongoose";


const myAuthSchema=new mongoose.Schema({
    
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        mygender:["Male","Female"]
       
    }
    
})

const myAuthModel=mongoose.model("auth",myAuthSchema);
export default myAuthModel