const express = require('express')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 3002
require('dotenv').config()
const app = express()


//Middlewares

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())

//
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }, (err) => {
    if(err) {
        return err
    }

    console.log("Conectado a MongoDB")
})



//Listener
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`)
})