import mongoose from "mongoose";

const myStudentShchema=new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    class:{
        type:Number,
        required:true
    }
})

const StudentModel=mongoose.model("student",myStudentShchema);
export default StudentModel;