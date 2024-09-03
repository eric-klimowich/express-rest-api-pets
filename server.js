const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

const petRouter = require('./controllers/pets.js')

app.use(cors({ origin: 'https://react-pets-front-end.netlify.app/' }))

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

app.use(express.json())

app.use('/pets', petRouter)

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});