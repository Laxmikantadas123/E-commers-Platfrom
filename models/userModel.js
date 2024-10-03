const mongoose = require("mongoose");
const validator=require("validator")
const bcrypt=require("bcrypt")
const userShema =mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim:true
    },
    lastname: {
      type: String,
      required: true,
      trim:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim:true,
      validate(value){
        if(!validator.isEmail(value)){
            throw new Error("email is not valid")
        }
      }
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim:true,
      max:10,
      min:10
    },
    password: {
      type: String,
      required: true,
      trim:true
      
    },
    role: {
      type: String,
      enum:["user","admin"],
      default:"user",
    },
    address: {
        type:String,
      }
  },
  
  { timestamps: true }
);
userShema.pre("save",async function(next){
  if(!this.isModified("password")) return next()
      this.password= await bcrypt.hash(this.password,10)
      next()
})
const userModel = mongoose.model("user", userShema);
module.exports = userModel;