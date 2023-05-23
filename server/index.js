const express = require("express")
//import path module
const path = require('path')
const app = express();

const db = require('./queries')
const PORT = 8001

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static (path.resolve(__dirname, '../client/build')))
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../client/build', 'indext.html'))
})

// app.get('/api', (req, res)=>{
//     res.json({message: "Yo yo!"})
//      })
app.get('/names', db.getNames)

app.get('/users/:id', db.getNameById)
app.post('/new', db.createName)
app.put('/update/:id', db.updateName)
app.delete('/delete/:id', db.delName)

app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})