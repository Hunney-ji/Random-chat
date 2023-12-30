const mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/champ")
const passport=require("passport-local-mongoose")
const userSchema = new mongoose.Schema({
  username:{
    type:String
  },
  fullname:{
    type:String
  },
  posts: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post"
  }
   
  ],
  dp: {
    type: String, // Assuming you store the display picture as a URL or file path
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  
  
});
userSchema.plugin(passport)
const Usern = mongoose.model('User', userSchema);

module.exports = Usern