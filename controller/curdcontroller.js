import myProductModel from "../model/curd.js";

export const getData=async(req,res)=>{
    let data=await myProductModel.find();
    res.status(200).send(data)
}


export const postData=async(req,res)=>{
  
    let data=new myProductModel(req.body);
    let result=await data.save();
    res.status(200).send(result)

}

export const putData=async(req,res)=>{
       let data=await myProductModel.updateOne(req.params,{
         $set:req.body
       })
       res.send(data)
}



