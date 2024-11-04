const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');
const productsRouter = require('./routes/products'); // Importa el archivo de rutas de productos

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb+srv://benja856:benja123456@cluster1.pxar9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {

})
.then(() => console.log('Conectado a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:', error));

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/api/products', productsRouter); // Monta el enrutador de productos

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = app;