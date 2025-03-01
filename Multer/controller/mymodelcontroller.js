import MyMulter from "../model/mymodel.js";
import multer from "multer";



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null,uniqueSuffix + '-' + file.originalname  )
    }
  })

export const upload = multer({ storage })

// const storage = multer.memoryStorage()
// export const upload = multer({ storage })

 

export const myMulterFunc=async(req,res)=>{

    try{
            const {name,email,age}=req.body;

     
    
            // const newPhotoPath=req.file?req.file.path:null
          
       //    const photobase=req.file?req.file.buffer.toString("base64"):null
           const newUser=new MyMulter({
                   name,
                   email,
                   age,
                   photo
                   
            })

            await newUser.save();
            
           
            res.status(200).json({message:"data is created",newUser})
    }
    catch(err){
           console.log(err)
           res.status(500).json({message:"internal server error"})

    }

}