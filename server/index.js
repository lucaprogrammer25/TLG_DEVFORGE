const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const ProductModel = require('./models/Products.js')

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connessione al database stabilita.");
  })
  .catch(err => console.error("Errore di connessione al database:", err));

const db = mongoose.connection;
db.on('error', console.error.bind('Errore di connessione al database:'));
db.once('open', () => {
  console.log('Connessione al database stabilita.');
});

app.get('/api/product', async (req, res) => {
  try {
    const products = await ProductModel.find();
    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'Nessun prodotto trovato' });
    }
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Errore del server' });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
