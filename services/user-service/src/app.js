const express = require('express')
const userRoutes = require("./routes/user.routes")

const app = express()

app.use(express.json())

app.get("/health", (req,res)=>{
    res.status(200).json({
        service: process.env.SERVICE_NAME,
        status: "UP"
    })
})

app.use("/api/v1/blogSite/user", userRoutes)

module.exports = app