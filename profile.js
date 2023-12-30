const mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/champ")
const passport=require("passport-local-mongoose")
const postSchema=new mongoose.Schema({
    image:{
        type:String,
       
    }
})
module.exports=mongoose.model("post",postSchema)