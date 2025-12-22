const bcrypt = require("bcrypt")
const userRepository = require("../repositories/user.repository")

const registerUser = async ({ username, email, password }) => {
    const existingUser = await userRepository.findOneEmail(email)

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

module.exports = { registerUser }