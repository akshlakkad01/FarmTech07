const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  category: String,
  price: Number,
  quantity: {
    type: Number,
    default: 1,
    min: 1,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
