const express = require("express");
const router = express.Router();
const mongoose =require('mongoose');
const FormData = require("../FormData/FormData")
const DynamicForm = require("../FormData/DynamicFormData");
router.get("/",(req,res,next)=>{
    res.send("Santy");

});

router.post("/fData",(req,res,next)=>{
     
     const  fData = req.body;
     const formD = new FormData({
        FData : fData
    }); 
     formD
    .save()
    .then(result =>{
     console.log(result);
    })
    .catch(err => console.log(err));
    //console.log(FData);
   res.status(200).json({
       message:"Inserted"
   })

});

router.post("/Dynamic",(req,res,next)=>{

     dynamicFormDataFromUser = req.body;
     dFData = new DynamicForm({

        dyanmicFormData : dynamicFormDataFromUser

     });

     dFData.save()
     .then(result=>{
         console.log(result)
     })
     .catch(err=>console.log(err));

    console.log(req.body);
    res.status(200).json({
        message:req.body
    })
});

module.exports=router;