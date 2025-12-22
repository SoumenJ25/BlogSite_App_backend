require("dotenv").config()

const app = require("./src/app")
const connectDB = require("./src/config/db")

connectDB()

const PORT = process.env.PORT || 5002

app.listen(PORT, ()=>{
    console.log(`${process.env.SERVICE_NAME} running on port ${PORT}`)
})