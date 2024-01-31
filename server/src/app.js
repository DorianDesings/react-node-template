const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { corsOptions } = require('./config/cors.config');
require('dotenv').config();

// Rutas

// Middlewares para cliente
app.use(cors(corsOptions));
app.use(express.json());

// Uso de rutas

const startServer = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DATABASE}`);
    console.log('Connected to database');
    app.listen(3000, () => console.log('Servidor en ejecución en el puerto 3000'));
  } catch (err) {
    console.log('Connection error', err);
  }
};

startServer();
