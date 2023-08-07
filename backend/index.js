const express = require("express");
require("dotenv").config()
const cors = require('cors')

const app = express();

PORT = process.env.PORT

const conn = require('./conn')
// its a middleware
app.use(express.json());
app.use(cors())

const tripRoutes = require('./routes/trip.route')

app.use('/trip', tripRoutes)

app.get('/hello', (req,res) =>{
    res.send("Hello World")
})

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})