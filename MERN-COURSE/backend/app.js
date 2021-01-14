const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Product = require('./models/Products');

/* MIDDLEWARE */
app.use(bodyParser.json());
// We will use this to display the log request in specific format.
app.use(morgan('tiny'));


require('dotenv/config');

const { API_URL, PORT, MONGODB } = process.env;

app.get(`${API_URL}/products`, async (req, res) => {
    const productList = await Product.find();
    if(!productList){
        res.status(500).json({ success: false });
    }
    res.send(productList);
});

app.post(`${API_URL}/products`, (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    });
    product.save()
        .then((createdProduct => {
            res.status(201).json(createdProduct);
        }))
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
            });
        });
});

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'e-shop-database' } )
    .then(() => {
        console.log('Succefully connected to database');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(PORT || 4000, () => {
    console.log(`Server running at ${PORT || 4000}`);
});