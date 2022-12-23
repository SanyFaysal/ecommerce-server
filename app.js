const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// import routes
const productRoute = require('./routes/product.route');
// const userRoute = require('./routes/user.route');

// routes
app.get('/', (req, res) => {
  res.send('Route is working! YaY!');
});

app.use('/api/v1/product', productRoute);
// app.use('/api/v1/user', userRoute);

module.exports = app;
