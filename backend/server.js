const express = require("express");
const app = express();
const cors =require('cors');
require('dotenv').config();


app.use(express.json());
app.use(cors());


app.use('/mains', require("./routes/mains"))



app.listen(process.env.PORT,()=>{
    console.log(`Servers up on port ${process.env.PORT}`)
})