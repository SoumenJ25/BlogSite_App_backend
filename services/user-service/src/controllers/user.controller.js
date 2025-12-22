const { validationResult } = require("express-validator")
const { registerUser } = require("../services/user.service")

const register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, email, password } = req.body

        const user = await registerUser({ username, email, password })

        res.status(201).json({
            message: "User registered successfully",
            user
        })

    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message || "Internal Server Error"
        })
    }
}

module.exports = { register }