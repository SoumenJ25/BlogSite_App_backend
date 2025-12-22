const mongoose = require("mongoose")

const connectDataBase = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Blog service database connected")

    } catch (error) {
        console.error("blogDB Database connection is failed:", error.message)
        process.exit(1)
    }
}

module.exports = connectDataBase