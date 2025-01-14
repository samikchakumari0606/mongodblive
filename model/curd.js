import mongoose from "mongoose";

const mySchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        unique:true
    }
})

const myProductModel=mongoose.model("product",mySchema);
export default myProductModel
