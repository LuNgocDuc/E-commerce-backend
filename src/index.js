const express = require("express")
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const routes = require("./routes") 
const bodyParser = require("body-parser")

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

routes(app)


const MONGO_URI = `mongodb+srv://ngocduclu:vqAk70FR6HHyz2Am@cluster0.ydteboy.mongodb.net/?appName=Cluster0`;

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connect DB success !')
    })
    .catch((err) => {
        console.log("Database connection error: ", err)
    })

app.listen(port, () => {
    console.log('Server is running in port: ' + port)
})