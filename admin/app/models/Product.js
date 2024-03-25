const { model, Schema } = require("mongoose");
const mongoose = require("mongoose");

const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

 const Product = mongoose.models.Product || model("Product", ProductSchema);
 
 export default Product