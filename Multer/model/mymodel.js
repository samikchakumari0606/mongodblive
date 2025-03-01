import mongoose from "mongoose";


const mySchema=new mongoose.Schema({

    name:{
        type:String
    },
    email:{
       type:String
    },
    age:{
        type:Number
    },
    photo:{
        type:String
    },
    filename: String,
    path: String,
   mimetype: String,
})

const MyMulter=mongoose.model("mynewmulter",mySchema);
export default MyMulter;