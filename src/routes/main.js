const express=require("express")
const Detail=require("../models/Detail");
const Slider = require("../models/Slider");
const Service=require("../models/Service")
const routes=express.Router()

routes.get("/",async (req,res)=>{

    const details=await Detail.findOne({"_id":"658d1a8eb0bf07e8afcfe2b4"});
    const slides= await Slider.find()
    const services=await Service.find()
    // console.log(details)
    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})

routes.get("/gallery",async (req,res)=>{
    const details=await Detail.findOne({"_id":"658d1a8eb0bf07e8afcfe2b4"})
    res.render("gallery",{
        details:details
    });
});

routes.post("/process-contact-form",async (request, response)=>{
    console.log(request.body)
    try{
        const data=await Contact.create(request.body)
        console.log(data)
        response.redirect("/")
    }
    catch(error){
        console.log(error)
        response.redirect("/")
    }
})


module.exports=routes