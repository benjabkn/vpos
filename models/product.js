const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: String },
  stock: { type: Number, default: 0 }
});

module.exports = mongoose.model('Producto', productSchema);