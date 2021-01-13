const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* MIDDLEWARE */
app.use(bodyParser.json());


require('dotenv/config');
const api = process.env.API_URL;
const port = process.env.PORT;

app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: 'hair dress',
        image: 'some_url'
    }
    res.send(product);
});

app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
});

app.listen(port || 4000, () => {
    console.log(`Server running at ${port || 4000}`);
});