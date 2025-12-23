const express = require('express')
 const blogRoutes = require("./routes/blog.routes")


const app = express()

app.use(express.json())

app.get("/health", (req,res)=>{
    res.status(200).json({
        service: process.env.SERVICE_NAME,
        status: "UP"
    })
})

app.use("/api/v1/blogSite/user", blogRoutes)

module.exports = app