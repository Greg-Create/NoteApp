const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
require('dotenv/config')

app.use(cors())
app.use(express.json()) ;


//Import Routes
const authRoute = require('./routes/auth');


//Route middleWares
app.use('/note', authRoute)


//Connect to database
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true, 
}, () => console.log("connected to databse") );













app.listen(3001, () => {
  console.log(`Server listening on 3001`);
});