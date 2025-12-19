const bcrypt = require("bcrypt")
const User = require("../models/user.model")

const registerUser = async ({ username, email, password }) => {
    const existingUser = await User.findOne({ email })

    if (existingUser) {
        const error = new Error("User already exists")
        error.statusCode = 409
        throw error
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    return {
        id: user._id,
        email: user.email,
        username: user.username
    }
}

module.exports = { registerUser }