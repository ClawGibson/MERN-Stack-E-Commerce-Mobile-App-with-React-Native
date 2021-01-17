const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const productRoute = require('./routes/products.routes');
const usersRoute = require('./routes/users.routes');
const ordersRoute = require('./routes/orders.routes');
const categoryRoute = require('./routes/categories.routes');
const cors = require('cors');

require('dotenv/config');
const { API_URL, PORT, MONGODB } = process.env;

app.use(cors());
app.options('*', cors());

/* MIDDLEWARE */
app.use(bodyParser.json());
// We will use this to display the log request in specific format.
app.use(morgan('tiny'));

/* ROUTES */
app.use(`${API_URL}/products`, productRoute);
app.use(`${API_URL}/categories`, categoryRoute);
app.use(`${API_URL}/orders`, ordersRoute);
app.use(`${API_URL}/users`, usersRoute);

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