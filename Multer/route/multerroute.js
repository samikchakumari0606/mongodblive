import express from "express";
import { myMulterFunc } from "../controller/mymodelcontroller.js";
import { upload } from "../controller/mymodelcontroller.js";
import MyMulter from "../model/mymodel.js";

const multerroute=express.Router();

// multerroute.post("/multer",upload.single('photo'),myMulterFunc)
multerroute.post("/multer",upload.array('photo',10),async(req,res)=>{

    try {
        const files = req.files.map(file => ({
          filename: file.filename,
          path: file.path,
          mimetype: file.mimetype,
        }));
    
        const savedFiles = await MyMulter.insertMany(files);
    
        res.status(200).json({ message: "Files uploaded successfully", files: savedFiles });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
})

export default multerroute;