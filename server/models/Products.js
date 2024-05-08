const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: Number,
    name: String,
    gender: String,
    category: String,
    price: Number,
    quantity: Number,
    description: String,
    image: String
  }, { collection: 'product' }); 

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;