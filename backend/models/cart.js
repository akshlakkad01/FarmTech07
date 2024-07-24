const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    id:Number,
    item: {
        type:String,
        require:true
    },
    category:String,
    price:Number,
   
});

const Cart = mongoose.model("Cart",cartSchema);
module.exports = Cart;