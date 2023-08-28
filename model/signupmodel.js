const mongoose = require("mongoose");


const signupSchema = mongoose.Schema({
    Email:String,
    Password:String,
    Name:String,
    Address:String,
    City:String,
    Product:String
})

module.exports=mongoose.model("user",signupSchema);