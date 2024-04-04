const mongoose = require("mongoose");
require("dotenv").config();


async function Database(){
    try{
        await mongoose.connect(process.env.CLUSTER,{useNewUrlParser:true},(err)=>{
            if(err){
                throw err
            }else{
                console.log("Connected to Cluster!")
            };
            
        })
    }catch(err){
        console.error(err);
    }
}

module.exports = Database;