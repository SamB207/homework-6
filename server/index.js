const express = require("express")
//import path module
const path = require('path')
const app = express();

const db = require('./queries')
const PORT = 8001

app.get('/api', (req, res)=>{
    res.json({message: "Yo yo!"})
     })

app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})