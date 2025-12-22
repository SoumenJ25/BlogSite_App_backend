const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userRepository = require("../repositories/user.repository")

const registerUser = async ({ username, email, password }) => {
    const existingUser = await userRepository.doesEmailExist(email)

    if (existingUser) {
        const error = new Error("User already exists")
        error.statusCode = 409
        throw error
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await userRepository.createUser(username, email, hashedPassword)
    return {
        id: user.userId,
        email: user.email,
        username: user.username
    }
}

const loginUser = async ({ email, password }) => {
    const user = await userRepository.doesEmailExist(email)

    if (!user) {
        const error = new Error("Invalid Credentials")
        error.statusCode = 401
        throw error
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        const error = new Error("Invalid Credentials")
        error.statusCode = 401
        throw error
    }

    return jwt.sign({
        userId: user._id,
        email: user.email
    },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    )
}

module.exports = { registerUser, loginUser }