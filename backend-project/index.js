import mongoose from "mongoose";
import express, { urlencoded } from "express";
import cors from "cors"; //cross origin resource sharing

const app=express();
app.use(express.json())
app.use(cors());
app.use(urlencoded());

mongoose.connect("mongodb://localhost:27017/restaurant").then((ack)=>{
    if(ack){
        console.log("connected to database");
    }
    })
    .catch((err)=>{
        console.log("Error : ",err);
    });

//creating connections


//creating a validation schema
const orderSchema=new mongoose.Schema({
    orderName:String,
    qty:Number,
    location:String,
    contact:String,
})

const orderCollections=new mongoose.model("orders",orderSchema)


//menu collection creation flow
const menuSchema=new mongoose.Schema({
    menuName:String,
    price:Number,
    stock:Number,
})


const menuCollections=new mongoose.model("menu",menuSchema)


app.post("/add-menu",(req,res)=>{
    menuCollections.findOne({menuName:req.body.menuName}).then((isMenuPresent)=>{
        if(isMenuPresent){
            res.send("Menu is already present, Please use it!!!1")
        }
        else{
            const newMenu=menuCollections(req.body)
            newMenu.save().then((isMenuCreated)=>{
                if(isMenuCreated){
                    res.send("Menu added successfully!!!")
                }
                else{
                    res.send("Failed to add menu! Please try again")
                }
            }).catch((exe)=>{
                console.log(exe)
            })
        }
    })
})


app.get("/mymenus", async (req,res)=>{
    const allMenus= await menuCollections.find()
    console.log("My menus : ",allMenus);
    res.send(allMenus);
})

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
    console.log("Order req : ",req.body)
    orderCollections.findOne({orderName:req.body.orderName}).then((isOrderPlaced)=>{
        if(isOrderPlaced){
            res.send("Order is already placed")
        }
        else{
            const newOrder=orderCollections(req.body)
            newOrder.save().then((isSaveSuccess)=>{
                if(isSaveSuccess){
                    res.send("Order placed Thank You!!!")
                }
                else{
                    res.send("Failed to place an Order! Please try again")
                }
            })
            .catch((exe)=>{
                console.log(exe)
            })
        }
    })
})


//to view all the orders placed
app.get("/myorders", async (req,res)=>{
    const allOrders=await orderCollections.find()
    console.log("My orders : ",allOrders);
    res.send(allOrders);
})


app.listen(8000,()=>{
    console.log("Server running in port 8000");
})