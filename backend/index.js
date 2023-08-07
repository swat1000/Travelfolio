const express = require("express");
require("dotenv").config()

const app = express();

PORT = process.env.PORT
// its a middleware
app.use(express.json());

app.get('/hello', (req,res) =>{
    res.send("Hello World")
})

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})