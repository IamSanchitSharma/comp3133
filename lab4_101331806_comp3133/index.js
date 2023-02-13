const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute');
const SERVER_PORT = 8081;

const app = express();
app.use(express.json()); 

mongoose.connect('mongodb+srv://sanchitsharmanew:Bushfishfood9@cluster0.geq4lfd.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(userRouter);


app.route("/").get((req,res)=>{
    res.send("<h1>Lab 04 – Mongoose Validation");
})
    

app.listen(SERVER_PORT, () =>{
  console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})