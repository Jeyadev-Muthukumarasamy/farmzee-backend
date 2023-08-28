const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const product=require("./product.json")
const vegetable = require("./Vegetable.json")
const PORT = process.env.PORT || 3005;
require('dotenv').config()
const fruits = require("./Fruits.json");
const Dairy = require("./Dairy.json");
const Fertilizer = require("./Fertilizer.json");
const connectDb = require("./config/db");
const signupmodel = require("./model/signupmodel");
connectDb();
signupmodel

// const filteredCarrots = vegetable.filter(item=>item.name=="Carrot");
// console.log(filteredCarrots);   

// app.get("/vegetables/carrot",(req,res)=>{
//     res.json(filteredCarrots);
// })

app.get("/",(req,res)=>{
    res.json(product);
})
app.get("/vegetables",(req,res)=>{
    res.json(vegetable);
   
})
app.get('/Vegetables/:id', (req, res) => {
    const id = req.params.id;
    const vegetable = vegetable.find(veg => veg.id === parseInt(id));
      
    if (!vegetable) {
      return res.status(404).json({ error: 'Vegetable not found' });
    }
    
    res.json(vegetable);
  });
  
  
app.get("/fruits",(req,res)=>{
    res.json(fruits)
})
app.get("/Fertilizer",(req,res)=>{
    res.json(Fertilizer)
})

app.get("/Dairy",(req,res)=>{
    res.json(Dairy)
})

app.listen(PORT,()=>{
    console.log("server started in 3005 ")
})