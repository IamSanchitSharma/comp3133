const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/restaurantRoute');

const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://iamsanchitsharma:Busahfishfood9$@cluster0.geq4lfd.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(restaurantRouter);

app.listen(3000, () => { console.log('Server is running...') });