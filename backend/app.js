const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const Item = require("./models/item.js")
const Cart = require("./models/cart.js")
const User = require("./models/user.js")
const ejsMate = require("ejs-mate");
const path = require("path");
const data = require("./init/data.js");
const { render, cookie } = require('express/lib/response.js');
const cors = require('cors');
const bodyparser = require('body-parser');
const { name } = require('ejs');
const jwt=require("jsonwebtoken");

const cookieParser = require('cookie-parser');


app.use(cookieParser());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsMate);
app.use(express.urlencoded({extended : true}));
app.use(cors({origin: "http://localhost:5173", credentials:true}));
app.use(bodyparser.json());

const MONGO_URL = "mongodb://127.0.0.1:27017/agri";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// const initDB = async()=>
// {
//     await Item.insertMany(data);
//     console.log("data inislized");
//     console.log(data);
// }
// initDB();

app.get("/",(req,res)=>
{
    
    res.cookie('cookie','krish',{ maxAge: 900000, httpOnly: true });
    res.cookie('cookies','krishKadchhi',{ maxAge: 900000, httpOnly: true });
   res.send("cookie has been saved")
})

//show items
app.get("/items",async(req,res)=>
  {
       const items = await Item.find();
      // res.send("welcome");
      // console.log(item);
      res.render("item.ejs",{items})
      
  })
  
  //products show case
  app.get("/showPro",async(req,res)=>
  {
    const items=await Item.find();
    res.send(items);
  
  })
  
  //Add Product in item database
  app.post("/add",async(req,res)=>
  {
    // console.log(req.body);
    const data = {
      id: req.body.product_id,
      name: req.body.product_name,
      category: req.body.product_catagory,
      price: req.body.product_price
    };
    await Item.insertMany(data);
    res.status(201).json({message: "Added successfully."})
  })

//delete product
app.delete("/deleteProduct/:id" , async(req,res)=>
{
  let {id} = req.params;
  console.log(id);
  await Item.deleteOne({id:id});
  
  console.log("successfuly deleted")
})

//add products in cart
app.post("/addCart",async(req,res)=>
{
    const data={
      id:req.body.cart_id,
      item:req.body.cart_name,
      category:req.body.cart_category,
      price:req.body.cart_price
    }
    await Cart.insertMany(data);
    console.log("item add successfuly in the database");
})

//show cart product
app.get("/showCart",async(req,res)=>
{
  const item = await Cart.find();
  if(item == null)
  {
    res.send("your cart is empty");
  }
  else {
    console.log("data sent");
    res.send(item);
  }
  
})

//signup data
app.post("/signup",async(req,res)=>
{
  let token;
  const data={
    name:req.body.username,
    email:req.body.email,
    password:req.body.password
  }
  await User.insertMany(data);
  const userSingup=User.findOne({email:data.email});
  console.log("user detail has been successfuly added");
   token = jwt.sign({_id:this._id},"mysecret");
   res.cookie('cookie',token,{ httpOnly: true });
   
   console.log(token);
   res.cookie('cookie',token);
   res.status(201).send({data: "AAvi gya ho"});
})

//check for loged in user
app.post("/login",async(req,res)=>
{
  try {
    const data = {
      name:req.body.username,
      email:req.body.email,
      password:req.body.password
    }
    const check = await User.findOne({email:data.email})
    console.log(check);
    
      if(!check) {
        console.log("you are not my friend");
        res.status(401).send("Unauthorized");
    }
    else{
      console.log("you logedd in my friend");
      let token = jwt.sign({email:data.email},"mysecret");
      console.log(token);
      res.cookie('loginCookie','bhai123',{httpOnly: true });
      res.status(200).send("Login successful")
    }
  }
  catch(error)
  {
    res.status(404).send("Internal Server Error");
  }
})

app.listen(port,()=>
{
    console.log(`port is listing in ${port}`);
})