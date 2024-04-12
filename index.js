const env = require('dotenv')
const cors = require('cors')
env.config()

const express = require('express')
const ConnectDB = require('./config/ConnectDB')
const app = express()

const PORT = 3500
app.use(cors({
    origin: "*"
}))

app.use(express.json())

ConnectDB()


app.use('/' , require('./routes/jobpostroute'))


app.listen(PORT, console.log(`Server Running On Port ${PORT}`))