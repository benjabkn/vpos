const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  cliente: String,
  productos: [
    {
      producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto' },
      cantidad: Number,
    },
  ],
  total: Number,
  fecha: { type: Date, default: Date.now },
});

const Pedido = mongoose.model('Pedido', pedidoSchema);
module.exports = Pedido;