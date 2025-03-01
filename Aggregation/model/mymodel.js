
import mongoose from "mongoose";

const Student=new mongoose.Schema({
    
    type: mongoose.Schema.Types.ObjectId,
    id:Number,
    name:String,
    age:Number
    

})



const library=new mongoose.Schema({
      book:String,
      libraryname:String

})

export const StudentModel=mongoose.model("Student",Student);
export const LibraryModel=mongoose.model("Store",library);

