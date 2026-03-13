import mongoose from "mongoose";
import express, { urlencoded } from "express";
import cors from "cors"; //cross origin resource sharing

const app=express();
app.use(express.json())
app.use(cors());
app.use(urlencoded());

mongoose.connect("mongodb://localhost:27017").then((ack)=>{
    if(ack){
        console.log("connected to database");
    }
    })
    .catch((err)=>{
        console.log("Error : ",err);
    });

app.get("/",(req,res)=>{
    res.send("Welcome to Node Express");
})

app.get("/login",(req,res)=>{
    console.log("Request Sent",req.body);
})


app.get("/enquiry",(req,res)=>{
    console.log("Query param sent from FE",req.query.name,req.query.age,req.query.address);
    res.send("Got query params");
})


app.post("/place-order",(req,res)=>{
    if(req.body.quantity>=2){
        res.send("Order Placed Successfully!!!");
    }
    else{
        res.send("Please order at least 2 items");
    }
})

app.listen(8000,()=>{
    console.log("Server running in port 8000");
})