const mongoose = require('mongoose');

const passport=require("passport-local-mongoose")
const msgSchema=new mongoose.Schema({
   msg:[{
    type:String,
 
   }],
  id:{type:String},
  
})
module.exports=mongoose.model("msg",msgSchema)